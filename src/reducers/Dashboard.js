
import {

  APP_GET_CITY_REQUEST,
  APP_GET_CITY_SUCESS,
  APP_GET_CITY_FAIL,

  APP_POST_SEARCH_REQUEST,
  APP_POST_SEARCH_SUCESS,
  APP_POST_SEARCH_FAIL,
  
  } from '../constants'
  
  const initialState = {
    error: undefined,
    loading: false,
    data: undefined
  }
  
  export default (state = initialState, action) => {
  
    switch (action.type) {
      case APP_GET_CITY_REQUEST:
        return { ...state, error: undefined, loading: false }
  
      case APP_GET_CITY_FAIL:
        return { ...state, error: action.error, loading: false }
  
      case APP_GET_CITY_SUCESS:
        return {
          ...state,
          loading: false,
          data: { ...action.payload }
        }
  
      case APP_POST_SEARCH_REQUEST:
        return { ...state, error: undefined, loading: true }
  
      case APP_POST_SEARCH_FAIL:
        return { ...state, error: action.error, loading: false }

        case APP_POST_SEARCH_SUCESS:
        return {
          ...state,
          loading: false,
          data: { ...action.payload }
        }
  
      default: return state
    }
  }