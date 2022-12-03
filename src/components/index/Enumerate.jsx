import { For } from 'solid-js'

const Block = (props) => {
  return (
    <div
      class="flex h-50 items-center justify-between"
      classList={{ 'flex-row-reverse': !props.iconLeft }}
    >
      <div class={'w-35 h-40 ' + props.icon} />
      <div class="w-[calc(100%-10rem)]">
        <h1 class="">{props.title}</h1>
        <p class="op-90">{props.content}</p>
      </div>
    </div>
  )
}

const blocks = [
  {
    title: '友好的玩家',
    icon: 'i-fluent-people-20-filled',
    iconLeft: true,
    content:
      '加入 Project Iridium 的要求之一是做一个易于相处的人，你不需要担心自己作为新人而无法融入这个世界。'
  },
  {
    title: '极低的延迟',
    icon: 'i-fluent-cellular-data-1-20-filled',
    iconLeft: false,
    content:
      '服务器网络链路已经过优化，无需调整自己的网络即可获得极低的延迟。不论使用哪家网络延迟都小于 50ms。'
  },
  {
    title: '兼容任何客户端',
    icon: 'i-fluent-full-screen-maximize-20-filled',
    iconLeft: true,
    content: '你可以使用任何客户端游玩服务器。当然，我们不欢迎外挂.'
  }
]

export default () => {
  return (
    <section class="overflow-hidden md:h-0 w-full h-max transition-all-300 font-sans">
      <div class="h-max mx-5">
        <For each={blocks}>{(block) => <Block {...block} />}</For>
      </div>
      <div class="bg-gray-2 text-center p-y-10">
        <h1 class="m-0 mb-5 color-gray-9">立即加入服务器</h1>

        <div class="bg-gray-9 color-white font-sans text-6 ma w-80% rounded-xl p-5">
          IP: play.notkiller.moe
        </div>
      </div>
    </section>
  )
}
