import { For } from 'solid-js'

const Block = (props) => {
  return (
    <div
      class="flex h-50 items-center justify-between"
      classList={{ 'flex-row-reverse': !props.iconLeft }}
    >
      <div class={'w-100 h-40 ' + props.icon} />
      <div class="w-10" />
      <div class="">
        <h1 class="">{props.title}</h1>
        <p class="op-90">{props.content}</p>
      </div>
    </div>
  )
}

const blocks = [
  {
    title: '友好的玩家',
    icon: 'i-fluent-add-square-20-filled',
    iconLeft: true,
    content:
      '加入 Project Iridium 的要求之一是做一个易于相处的人，你不需要担心自己作为新人而无法融入这个世界。'
  },
  {
    title: '极低的延迟',
    icon: 'i-fluent-add-square-20-filled',
    iconLeft: false,
    content:
      '服务器网络链路已经过优化，无需调整自己的网络即可获得极低的延迟。不论使用哪家网络延迟都小于 50ms。'
  },
  {
    title: '高质量的服务',
    icon: 'i-fluent-add-square-20-filled',
    iconLeft: true,
    content:
      '我们的服务器硬件均为高端服务器，保证了服务器的稳定性。我们的服务器硬件均为高端服务器，保证了服务器的稳定性。'
  }
]

export default () => {
  return (
    <section class="overflow-hidden md:h-0 w-full h-max transition-all-300">
      <div class="h-max mx-5">
        <For each={blocks}>{(block) => <Block {...block} />}</For>
      </div>
    </section>
  )
}
