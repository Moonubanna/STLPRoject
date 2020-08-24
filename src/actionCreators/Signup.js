import {
    APP_SIGNUP_REQUEST,
    APP_SIGNUP_SUCESS,
    APP_SIGNUP_FAIL,

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
  
  //COUNTRY
  export function countryApiReq(data) {
    return { type: APP_COUNTRY_REQUEST, payload: data }
  }
  
  export function countryApiSuccess(user) {
    return { type: APP_COUNTRY_SUCESS, payload: user }
  }
  
  export function countryApiFailed(user) {
    return { type: APP_COUNTRY_FAIL, payload: user }
  }

  //state
  export function stateApiReq(data) {
    return { type: APP_STATE_REQUEST, payload: data }
  }
  
  export function stateApiSuccess(user) {
    return { type: APP_STATE_SUCESS, payload: user }
  }
  
  export function stateApiFailed(user) {
    return { type: APP_STATE_FAIL, payload: user }
  }

  //city
  export function cityApiReq(data) {
    return { type: APP_CITY_REQUEST, payload: data }
  }
  
  export function cityApiSuccess(user) {
    return { type: APP_CITY_SUCESS, payload: user }
  }
  
  export function cityApiFailed(user) {
    return { type: APP_CITY_FAIL, payload: user }
  }
  
//signup
  export function signUPApiReq(data) {
    return { type: APP_SIGNUP_REQUEST, payload: data }
  }
  
  export function signUPApiSuccess(user) {
    return { type: APP_SIGNUP_SUCESS, payload: user }
  }
  
  export function signUPApiFailed(user) {
    return { type: APP_SIGNUP_FAIL, payload: user }
  }
  