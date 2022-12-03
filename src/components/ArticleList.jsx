import { For } from 'solid-js'

const Block = (params) => {
  return (
    <div class="bg-blue rounded-7 w-full h-50 m-b-5 flex items-end">
      <h2 class="color-white mx-7 mb-7 font-sans">
        {params.data.title.rendered}
      </h2>
      {/* TODO */}
    </div>
  )
}

export default (params) => {
  return (
    <div class="w-full">
      {/* Header */}
      <div class="bg-cyan h-50 w-full flex items-end">
        <h1 class="color-white ml-5 text-9 tracking-wide">新闻列表</h1>
      </div>

      {/* Blocks */}
      <div class="m-3">
        <For each={params.data}>{(item) => <Block data={item} />}</For>
      </div>
    </div>
  )
}
