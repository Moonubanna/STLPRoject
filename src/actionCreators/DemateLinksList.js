import {
    APP_DEMATE_LINK_REQUEST,
    APP_DEMATE_LINK_SUCESS,
    APP_DEMATE_LINK_FAIL,
  
  } from '../constants'
  
  export function demateLinkApiReq(data) {
    return { type: APP_DEMATE_LINK_REQUEST, payload: data }
  }
  
  export function demateLinkApiSuccess(user) {
    return { type: APP_DEMATE_LINK_SUCESS, payload: user }
  }
  
  export function demateLinkApiFailed(user) {
    return { type: APP_DEMATE_LINK_FAIL, payload: user }
  }

  