import logo from '../assets/images/logo.svg'
import { Link, useLocation } from '@solidjs/router'

import { createEffect, createSignal, onMount, Show } from 'solid-js'

function getThemeSetting () {
  if (window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default () => {
  const location = useLocation()
  const [show, setShow] = createSignal(location.pathname !== '/')

  const [dark, setDark] = createSignal(false)

  if (typeof window !== 'undefined') {
    setDark(getThemeSetting() === 'dark')
  }
  onMount(() => {
    setTimeout(() => {
      setShow(true)
    }, 0)
  })

  createEffect(() => {
    document.body.classList.toggle('dark', dark())
    document.body.classList.toggle('light', !dark())
    window.localStorage.setItem('theme', dark() ? 'dark' : 'light')
  })
  return (
    <header
      class="w-full h-13 flex items-center justify-between bg-gradient-to-r from-#FBC2EB to-#A6C1EE font-sans fixed z-1 transition-all-500"
      classList={{ 'top-0': show(), 'top--13': !show() }}
    >
      <a href="/" class="flex items-center decoration-none ml-10">
        <img src={logo} alt="Logo" class="w-10 h-10 mr2" />
        <span class="color-black">Project Iridium</span>
      </a>

      <div class="mr-10 flex items-center">
        <a
          href="/news"
          class="color-black decoration-none transition op-70 hover:op-100"
        >
          新闻
        </a>
        <div class="ml-3 relative w-5 h-5" onClick={() => setDark(!dark())}>
          <div
            class="absolute top-0 w-5 h-5 i-fluent-weather-moon-16-filled cursor-pointer"
            classList={{
              'op-100': !dark(),
              'op-0': dark()
            }}
          />
          <div
            class="absolute top-0 w-5 h-5 i-fluent-weather-sunny-16-filled cursor-pointer"
            classList={{
              'op-100': dark(),
              'op-0': !dark()
            }}
          />
          {/* Day Night */}
        </div>
      </div>
    </header>
  )
}
