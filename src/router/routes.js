
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/post/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/post/:id', component: () => import('pages/post.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/login.vue') }
    ]
  }, {
    path: '/createPost',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/createPost', component: () => import('pages/createPost.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
