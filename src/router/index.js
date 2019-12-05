import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '_v/layout'

const _import_views = (path) => () => import(`_v/${path}`)

Vue.use(VueRouter)

export const routes = [
  // 登录
  {
    path: '/login',
    name: 'login'
  },
  // 注册
  {
    path: '/register',
    name: 'register'
  },
  // 首页模块
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: _import_views('home')
      },
      {
        path: 'article-list',
        name: 'article-list'
      },
      {
        path: 'article/:id',
        name: 'article'
      },
      {
        path: 'submit-article',
        name: 'submit-article'
      }
    ]
  },
  // 圈子模块
  {
    path: '/circle',
    component: layout,
    redirect: '/circle/index',
    children: [
      // 圈子首页
      {
        path: 'index',
        name: 'circle-index',
        component: _import_views('circle')
      },
      // 圈子列表页
      {
        path: 'circle-list',
        name: 'circle-list',
        component: _import_views('circle/circleList')
      },
      // 圈子详情(帖子列表)
      {
        path: 'circle-detail/:id',
        name: 'circle-detail',
        component: _import_views('circle/circleforum')
      },
      // 创建圈子
      {
        path: 'circle-create',
        name: 'circle-create',
        component: _import_views('circle/newcircle')
      },
      // 发布帖子
      {
        path: 'post-create',
        name: 'post-create',
      },
      // 帖子详情
      {
        path: 'post-detail/:id',
        name: 'post-detail'
      },
      // 热门动态
      {
        path: 'hot-posts',
        name: 'hot-posts',
      }
    ]
  },
  // 游戏中心模块
  {
    path: '/game-center',
    component: layout,
    redirect: '/game-center/index',
    children: [
      // 游戏中心首页
      {
        path: 'index',
        name: 'game-center',
        component: _import_views('game-center')
      },
      // 游戏中心-游戏内容页
      {
        path: 'detail/:id',
        name: 'game-detail'
      }
    ]
  },
  // 游戏资讯
  {
    path: '/game-news',
    component: layout,
    redirect: '/game-news/index',
    children: [
      {
        path: 'index',
        name: 'game-news',
        component: _import_views('game-news')
      }
    ]
  },
  // 游戏技巧
  {
    path: '/game-skill',
    redirect: '/game-skill/index',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'game-skill',
        component: _import_views('game-skill')
      }
    ]
  },
  // 网友点评
  {
    path: '/comment',
    component: layout,
    redirect: '/comment/index',
    children: [
      {
        path: 'index',
        name: 'comment',
        component: _import_views('comment')
      }
    ]
  },
  // 积分商城
  {
    path: '/mall',
    component: layout,
    redirect: '/mall/index',
    children: [
      {
        path: 'index',
        name: 'mall',
        component: _import_views('mall')
      },
      {
        path: 'good-detail/:id',
        name: 'good-detail',
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router