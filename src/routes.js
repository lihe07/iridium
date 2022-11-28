import { lazy } from 'solid-js'

const postsMetadata = [
  // Fetched from API at build time
  {
    id: 'just-a-post',
    title: 'Just a post',
    keywords: ['post', 'solid', 'solidjs'],
    description: 'Just a post about SolidJS'
  }
]

export default () => [
  {
    path: '/',
    component: lazy(() => import('./pages/Index')),
    meta: {
      description: 'Index Page',
      keywords: 'index, demo'
    },
    title: 'Index'
  },
  {
    path: '/news',
    component: lazy(() => import('./pages/News')),
    meta: {
      description: 'About Page',
      keywords: 'about, demo'
    },
    title: 'About'
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/NotFound')),
    map: false
  },
  ...postsMetadata.map((post) => ({
    path: `/posts/${post.id}`,
    component: lazy(() => import('./pages/SinglePost')),
    meta: post,
    title: post.title
  }))
]
