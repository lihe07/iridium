import logo from '../assets/images/logo.svg'
import { Link, useLocation } from '@solidjs/router'

import { createSignal, onMount } from 'solid-js'

export default () => {
  const location = useLocation()
  const [show, setShow] = createSignal(location.pathname !== '/')

  onMount(() => {
    setTimeout(() => {
      setShow(true)
    }, 900)
  })
  return (
    <header
      class="w-full h-13 flex items-center justify-between bg-gradient-to-r from-#FBC2EB to-#A6C1EE font-sans fixed z-1 transition-all-500"
      classList={{ 'top-0': show(), 'top--13': !show() }}
    >
      <Link href="/" class="flex items-center decoration-none ml-10">
        <img src={logo} alt="Logo" class="w-10 h-10 mr2" />
        <span class="color-black">Project Iridium</span>
      </Link>

      <div class="mr-10">
        <Link href="/news">新闻</Link>
        <div />
      </div>
    </header>
  )
}
