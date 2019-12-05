import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '_v/layout'

const _import_views = (path) => () => import(`_v/${path}`)

Vue.use(VueRouter)

export const routes = [{
  path: '/',
  component: layout,
  redirect: '/home',
  children: [{
      path: 'home',
      name: 'home',
      meta: {
        title: '网站首页'
      },
      component: _import_views('home')
    },{
      path: 'article',
      name: 'art',
      meta: {
        title: '文章页'
      },
      component: _import_views('home/article')
    },
    {
      path: 'videopage',
      name: 'vid',
      meta: {
        title: '视频页'
      },
      component: _import_views('home/videopage')
    },
    {
      path: 'more',
      name: 'more',
      meta: {
        title: '更多'
      },
      component: _import_views('home/more')
    },
    {
      path: 'contribute',
      name: 'contr',
      meta: {
        title: '投稿'
      },
      component: _import_views('home/contribute')
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
      path: 'newcircle',
      name: 'newcircle',
      meta: {
        title: '创建圈子'
      },
      component: _import_views('circle/newcircle')
    },
    {
      path: 'circleList',
      name: 'circleList',
      meta: {
        title: '圈子列表'
      },
      component: _import_views('circle/circleList')
    },

    /* 圈子帖子列表与圈主端 */
    {
      path: 'circleforum',
      name: 'circleforum',
      meta: {
        title: '圈子'
      },
      component: _import_views('circle/circleforum')
    },
    {
      path: 'newPosting',
      name: 'newPosting',
      meta: {
        title: '发帖'
      },
      component: _import_views('circle/newPosting')
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
    },
    {
      path: 'profile',
      name: 'profile',
      meta: {
        title: '个人中心'
      },
      component: _import_views('profile')
    },
    {
      path: 'myguanzhu',
      name: 'myguanzhu',
      meta: {
        title: '我的关注'
      },
      component: _import_views('profile/myGuanzhu')
    },
    {
      path: 'myfans',
      name: 'myfans',
      meta: {
        title: '我的粉丝'
      },
      component: _import_views('profile/myFans')
    }
  ]
}]

const router = new VueRouter({
  routes
})

export default router