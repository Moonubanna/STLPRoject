
import {
    APP_MY_PROFILE_REQUEST,
    APP_MY_PROFILE_SUCESS,
    APP_MY_PROFILE_FAIL,

    APP_UPDATE_PROFILE_REQUEST,
    APP_UPDATE_PROFILE_SUCESS,
    APP_UPDATE_PROFILE_FAIL,

    APP_COUNTRY_REQUEST,
    APP_COUNTRY_SUCESS,
    APP_COUNTRY_FAIL,

    APP_STATE_REQUEST,
    APP_STATE_SUCESS,
    APP_STATE_FAIL,

    APP_CITY_REQUEST,
    APP_CITY_SUCESS,
    APP_CITY_FAIL
  
  } from '../constants'
  
  export function myProfileApiReq(data) {
    return { type: APP_MY_PROFILE_REQUEST, payload: data }
  }
  
  export function myProfileApiSuccess(user) {
    return { type: APP_MY_PROFILE_SUCESS, payload: user }
  }
  
  export function myProfileApiFailed(user) {
    return { type: APP_MY_PROFILE_FAIL, payload: user }
  }

  export function updateProfileApiReq(data) {
    return { type: APP_UPDATE_PROFILE_REQUEST, payload: data }
  }
  
  export function updateProfileApiSuccess(user) {
    return { type: APP_UPDATE_PROFILE_SUCESS, payload: user }
  }
  
  export function updateProfileApiFailed(user) {
    return { type: APP_UPDATE_PROFILE_FAIL, payload: user }
  }

  //COUNTRY
  export function countryMyProfileApiReq(data) {
    return { type: APP_COUNTRY_REQUEST, payload: data }
  }
  
  export function countryMyProfileApiSuccess(user) {
    return { type: APP_COUNTRY_SUCESS, payload: user }
  }
  
  export function countryMyProfileApiFailed(user) {
    return { type: APP_COUNTRY_FAIL, payload: user }
  }

  //state
  export function stateMyProfileApiReq(data) {
    return { type: APP_STATE_REQUEST, payload: data }
  }
  
  export function stateMyProfileApiSuccess(user) {
    return { type: APP_STATE_SUCESS, payload: user }
  }
  
  export function stateMyProfileApiFailed(user) {
    return { type: APP_STATE_FAIL, payload: user }
  }

  //city
  export function cityMyProfileApiReq(data) {
    return { type: APP_CITY_REQUEST, payload: data }
  }
  
  export function cityMyProfileApiSuccess(user) {
    return { type: APP_CITY_SUCESS, payload: user }
  }
  
  export function cityMyProfileApiFailed(user) {
    return { type: APP_CITY_FAIL, payload: user }
  }

  