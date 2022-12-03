import { For } from 'solid-js'
import { useNavigate } from 'solid-start'

import dummyCover from '../assets/images/background.webp'
import header from '../assets/images/listBackground.webp'

const Block = (props) => {
  // const cover = () =>
  //   props.data._embedded['wp:featuredmedia']
  //     ? props.data._embedded['wp:featuredmedia'][0].source_url
  //     : ''
  const cover = () => dummyCover
  return (
    <div
      class="transition rounded-7 w-full h-50 m-b-5 cursor-pointer bg-cover bg-center op-80 hover:op-100 active:scale-98 overflow-hidden"
      classList={{ '!op-100 !active:scale-100': props.selected }}
      onClick={() => props.onSelect()}
      style={{
        'background-image': `url(${cover()})`
      }}
    >
      <div class="bg-dark bg-op-30 w-full h-full flex items-end">
        <h2 class="color-white mx-7 mb-7 font-sans">
          {props.data.title.rendered}
        </h2>
      </div>
    </div>
  )
}

export default (props) => {
  const navigate = useNavigate()
  return (
    <div class="w-full">
      {/* Header */}
      <div
        class="h-50 w-full m-b-5 bg-cover bg-center"
        style={{
          'background-image': `url(${header})`
        }}
      >
        <div class="bg-dark bg-op-30 w-full h-full flex items-end">
          <h1 class="color-white ml-5 text-9 tracking-wide font-sans">
            新闻列表
          </h1>
        </div>
      </div>

      {/* Blocks */}
      <div class="m-3">
        <For each={props.data}>
          {(item, index) => (
            <Block
              data={item}
              selected={index() === props.current}
              onSelect={() => {
                // If Mobile: goto /news/:id
                // If Desktop: props.onSelect(index)
                if (window.innerWidth < 768) {
                  // window.location.href = `/news/${item.id}`
                  navigate(`/news/${item.id}`)
                } else {
                  props.onSelect(index())
                }
              }}
            />
          )}
        </For>
      </div>
    </div>
  )
}
