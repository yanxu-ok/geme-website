import axios from 'axios'
import { Message, Notification } from 'element-ui'
import router from "@/router"
import store from '@/store'
import { removeToken } from './cookie'
/**
 * 跳转至登录
 */
const toLogin = () => {
  // store.state.user.userId = null
  // store.state.menuRouter.isGain = false
  // removeToken()
  router.replace({
    path: '/login',
    query: { redirect: router.currentRoute.fullPath }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} code 不是200的code
 * @param {String} msg 错误code的提示信息
 */
const failHandle = (code, msg) => {
  switch(code) {
    case 401:             // token过期
      Message({
        message: msg,
        type: 'error',
        duration: 5 * 1000
      })
      removeToken()
      setTimeout(() => {
        location.reload()
      }, 1500)
      break
    default:
      console.log('other code and msg:', code, msg)
  }
}


const instance = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
}) 

instance.interceptors.request.use((config) => {
  // const token = store.state.user.token
  // token && (config.headers.Authorization = token)
  return config
})

instance.interceptors.response.use((res) => {
  let {data} = res
  if(data.code === 0){
    return Promise.resolve(data)
  }else{
    failHandle(data.code, data.msg)
    return Promise.reject(data.msg)
  }
}, (error) => {
  console.log('err' + error) // for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default instance