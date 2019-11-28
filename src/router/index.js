import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '_v/layout'

const _import_views = (path) => () => import(`_v/${path}`)

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '网站首页'
        },
        component: _import_views('home')
      },
      {
        path: 'circle',
        name: 'circle',
        meta: {
          title: '圈子首页'
        },
        component: _import_views('circle')
      },
      {
        path: 'game-center',
        name: 'game-center',
        meta: {
          title: '游戏中心'
        },
        component: _import_views('game-center')
      },
      {
        path: 'game-news',
        name: 'game-news',
        meta: {
          title: '游戏资讯'
        },
        component: _import_views('game-news')
      },
      {
        path: 'game-skill',
        name: 'game-skill',
        meta: {
          title: '游戏技巧'
        },
        component: _import_views('game-skill')
      },
      {
        path: 'comment',
        name: 'comment',
        meta: {
          title: '网友点评'
        },
        component: _import_views('comment')
      },
      {
        path: 'mall',
        name: 'mall',
        meta: {
          title: '积分商城'
        },
        component: _import_views('mall')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
