import { onMount, createSignal } from 'solid-js'
import background from '../../assets/images/backgournd.png'
import logo from '../..//assets/images/logo.svg'

export default () => {
  const [show, setShow] = createSignal(false)
  onMount(() => {
    setTimeout(() => {
      setShow(true)
    }, 300)
  })
  return (
    <section
      class="w-full md:h-screen h-80 bg-cover bg-center transition-height-300"
      style={{ 'background-image': `url(${background})` }}
    >
      <div
        class="transition-opacity-500 h-full w-full flex flex-col items-center justify-center bg-black bg-opacity-30 op-0 color-white font-sans"
        classList={{ '!op-100': show() }}
      >
        <div class="flex items-center justify-center m-t-2rem">
          <img
            src={logo}
            alt="Logo"
            class="md:w-30 md:h-30 h-20 w-20 mr-3 transition-all-300"
          />
          <h1 class="md:text-9 text-6 transition-all-300">Project Iridium</h1>
        </div>
        <h1 class="m-y-2 md:text-10 text-7 transition-all-300">纯天然无污染</h1>
        <h2 class="text-6">高版本原版生电服</h2>
      </div>
    </section>
  )
}
