import {
  APP_COUNTRY_REQUEST,
  APP_COUNTRY_SUCESS,
  APP_COUNTRY_FAIL,

  APP_STATE_REQUEST,
  APP_STATE_SUCESS,
  APP_STATE_FAIL,

  APP_CITY_REQUEST,
  APP_CITY_SUCESS,
  APP_CITY_FAIL,

  APP_SIGNUP_REQUEST,
  APP_SIGNUP_SUCESS,
  APP_SIGNUP_FAIL,

} from '../constants'

const initialState = {
  error: undefined,
  loading: false,
  data: undefined
}

export default (state = initialState, action) => {

  switch (action.type) {

    case APP_COUNTRY_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_COUNTRY_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_COUNTRY_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    case APP_STATE_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_STATE_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_STATE_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    case APP_CITY_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_CITY_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_CITY_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    case APP_SIGNUP_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_SIGNUP_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_SIGNUP_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    default: return state
  }
}