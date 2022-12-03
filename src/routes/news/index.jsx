import { createResource, createSignal, Show } from 'solid-js'
import { useRouteData } from 'solid-start'
import Article from '../../components/Article'
import ArticleList from '../../components/ArticleList'

const api = 'https://www.notkiller.moe/wp-json/wp/v2/posts?_embed&categories=28'

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
    <div class="flex mt-13 dark:bg-#0d1117 transition-all min-h-[calc(100vh-3.25rem)]">
      {/* List */}
      <div class="md:w-100 w-full h-[calc(100vh-3.25rem)] transition-all dark:border-r-slate-8 light:border-r-slate-2 border-r-2px overflow-y-scroll ">
        <ArticleList data={data()} onSelect={setCurrent} current={current()} />
      </div>

      <div class="md:w-[calc(100%-25rem)] w-0 md:h-[calc(100vh-3.25rem)] h-0 md:op-100 op-0 overflow-hidden overflow-y-scroll  ">
        <Show when={data()}>
          <Article data={data()[current()]} />
        </Show>
      </div>
      {/* Block */}
    </div>
  )
}
