import fs from 'fs/promises'
import { readFileSync } from 'fs'
import { Request } from 'undici'

const ssr = './dist/server.js'
const route = JSON.parse(
  readFileSync('./dist/public/route-manifest.json', 'utf8')
)

async function patchServer () {
  let server = await await fs.readFile(ssr, 'utf8')
  server = server.replace('const entryServer =', 'export const entryServer =')
  server = server.replace('server.listen(PORT,', '(')

  await fs.writeFile(ssr, server)
  const { entryServer } = await import('.' + ssr)
  return entryServer
}

async function getRoutes () {
  const posts = await (
    await fetch('https://www.notkiller.moe/wp-json/wp/v2/posts?categories=28')
  ).json()

  return ['/', '/news', ...posts.map((post) => `/news/${post.id}`)]
}

async function makeMockRequest (url) {
  return {
    request: new Request('http://example.com' + url),
    env: {
      manifest: route
    }
  }
}

async function main () {
  const entryServer = await patchServer()
  // Do prerender
  const routes = await getRoutes()
  const jobs = []
  for (let route of routes) {
    const job = async () => {
      const req = await makeMockRequest(route)
      const resp = await entryServer(req)
      // Write to file
      if (route === '/') {
        route = '/index'
      }
      if (route === '/*404') {
        route = '/404'
      }
      const path = './dist/public' + route + '.html'
      await fs.mkdir(path.substring(0, path.lastIndexOf('/')), {
        recursive: true
      })
      await fs.writeFile(path, resp.body)
    }
    jobs.push(job())
  }

  await Promise.all(jobs)

  // Do cleanup
  // Remove server.js
  await fs.unlink(ssr)

  // ./dist/public/* -> ./dist/*
  const files = await fs.readdir('./dist/public')
  for (const file of files) {
    await fs.rename('./dist/public/' + file, './dist/' + file)
  }
  // Remove ./dist/public
  await fs.rmdir('./dist/public')
  // Remove ./dist/manifet.json, ./dist/route-manifest.json, ./dist/ssr-manifest.json
  await fs.unlink('./dist/manifest.json')
  await fs.unlink('./dist/route-manifest.json')
  await fs.unlink('./dist/ssr-manifest.json')
}

main().catch((e) => console.error(e))
