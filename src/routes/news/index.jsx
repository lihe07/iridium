import { createResource, createSignal, Show } from 'solid-js'
import { useRouteData } from 'solid-start'
import Article from '../../components/Article'
import ArticleList from '../../components/ArticleList'

const api = 'https://www.notkiller.moe/wp-json/wp/v2/posts/'

export function routeData () {
  return createResource(async () => {
    const resp = await fetch(api)
    console.log('Data fetched from:', api)
    return await resp.json()
  })[0]
}
export default () => {
  const data = useRouteData()
  const [current, setCurrent] = createSignal(0)
  return (
    <div class="flex mt-13">
      {/* List */}
      <div class="md:w-100 w-full transition-all">
        <ArticleList data={data()} />
      </div>

      <div class="md:w-[calc(100%-25rem)] w-0 md:h-unset h-0 md:op-100 op-0 overflow-hidden">
        <Show when={data()}>
          <Article data={data()[current()]} />
        </Show>
      </div>
      {/* Block */}
    </div>
  )
}
