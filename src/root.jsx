// @refresh reload
import { Suspense } from 'solid-js'
import {
  Body,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title
} from 'solid-start'
import 'uno.css'
import Header from './components/Header'
import logo from './assets/images/logo.svg'

export default function Root () {
  return (
    <Html lang="en">
      <Head>
        <Title>Project Iridium</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Project Iridium" />
        <Meta name="keywords" content="solid, solidjs, solid-start" />
        <Link rel="icon" href={logo} />
      </Head>
      <Body class="m0">
        <Header />
        <Suspense>
          <Routes>
            <FileRoutes />
          </Routes>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
