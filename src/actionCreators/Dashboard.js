import {
  APP_GET_CITY_REQUEST,
  APP_GET_CITY_SUCESS,
  APP_GET_CITY_FAIL,

  APP_POST_SEARCH_REQUEST,
  APP_POST_SEARCH_SUCESS,
  APP_POST_SEARCH_FAIL,

} from '../constants'

//get city
export function getCityApiReq(data) {
  return { type: APP_GET_CITY_REQUEST, payload: data }
}

export function getCityApiSuccess(user) {
  return { type: APP_GET_CITY_SUCESS, payload: user }
}

export function getCityApiFailed(user) {
  return { type: APP_GET_CITY_FAIL, payload: user }
}

//post search
export function postSearchApiReq(data) {
  return { type: APP_POST_SEARCH_REQUEST, payload: data }
}

export function postSearchApiSuccess(user) {
  return { type: APP_POST_SEARCH_SUCESS, payload: user }
}

export function postSearchApiFailed(user) {
  return { type: APP_POST_SEARCH_FAIL, payload: user }
}


