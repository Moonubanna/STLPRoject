import {
    APP_LOGIN_REQUEST,
    APP_LOGIN_SUCESS,
    APP_LOGIN_FAIL,
  
  } from '../constants'
  
  export function loginApiReq(data) {
    return { type: APP_LOGIN_REQUEST, payload: data }
  }
  
  export function loginApiSuccess(user) {
    return { type: APP_LOGIN_SUCESS, payload: user }
  }
  
  export function loginApiFailed(user) {
    return { type: APP_LOGIN_FAIL, payload: user }
  }

  