import { createEffect, createResource, Show } from 'solid-js'
import { useRouteData } from 'solid-start'
import Article from '../../components/Article'

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
    <div class="pt-20 min-h-[calc(100vh-5rem)] dark:bg-#0d1117 transition-all">
      <Show when={data()}>
        <Article data={data()} />
      </Show>
    </div>
  )
}
