import { createEffect, createResource } from 'solid-js'
import { useRouteData } from 'solid-start'

const api = 'https://www.notkiller.moe/wp-json/wp/v2/posts/'

export function routeData ({ params }) {
  return createResource(async () => {
    const resp = await fetch(`${api}${params.id}`)
    console.log('Data fetched from:', `${api}${params.id}`)
    return await resp.json()
  })[0]
}

export default () => {
  const data = useRouteData()
  createEffect(() => {
    console.log('data loaded', data())
  })
  return (
    <div class="mt-20">
      <p>Todo: Style</p>
      <h1>{data()?.title?.rendered}</h1>
      {/* eslint-disable-next-line solid/no-innerhtml */}
      <div innerHTML={data()?.content?.rendered} />
    </div>
  )
}
