import request from '@/utils/request'

/**
 * 用户登录
 * @param {String} userName 用户名
 * @param {String} password 密码
 */
export function toLogin(userName, password){
  return request({
    url: '/login',
    method: 'POST',
    data: {
      userName,
      password
    }
  })
}