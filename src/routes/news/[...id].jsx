import { createEffect } from 'solid-js'
import { redirect, useRouteData } from 'solid-start'
import { createServerData$ } from 'solid-start/server'

const api = 'https://www.notkiller.moe/wp-json/wp/v2/posts/'

export function routeData ({ params }) {
  return createServerData$(
    async ([id]) => {
      const resp = await fetch(`${api}${id}`)
      // If 404
      if (resp.status === 404) {
        return redirect('/404')
      }
      return await resp.json()
    },

    { key: () => [params.id] }
  )
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
      <div innerHTML={data()?.content?.rendered} />
    </div>
  )
}
