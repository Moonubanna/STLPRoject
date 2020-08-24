import {
    APP_DEMATE_DETAIL_REQUEST,
    APP_DEMATE_DETAIL_SUCESS,
    APP_DEMATE_DETAIL_FAIL
  
  } from '../constants'
  
  export function demateDetailApiReq(data) {
    return { type: APP_DEMATE_DETAIL_REQUEST, payload: data }
  }
  
  export function demateDetailApiSuccess(user) {
    return { type: APP_DEMATE_DETAIL_SUCESS, payload: user }
  }
  
  export function demateDetailApiFailed(user) {
    return { type: APP_DEMATE_DETAIL_FAIL, payload: user }
  }

  