import {

  APP_LOGIN_REQUEST,
  APP_LOGIN_SUCESS,
  APP_LOGIN_FAIL,
  
} from '../constants'

const initialState = {
  error: undefined,
  loading: false,
  data: undefined
}

export default (state = initialState, action) => {

  switch (action.type) {
    case APP_LOGIN_REQUEST:
      return { ...state, error: undefined, loading: true }

    case APP_LOGIN_FAIL:
      return { ...state, error: action.error, loading: false }

    case APP_LOGIN_SUCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      }

    default: return state
  }
}