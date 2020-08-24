import {
  APP_START_FAIL,
  APP_START_SUCCESS,
  CONNECTION_STATE_CHANGE,
} from '../constants'

const initialState = {
  online: true,
  ready: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_START_SUCCESS: {
      return { ...state, ready: true }
    }
    case APP_START_FAIL: {
      return { ...state, ready: false }
    }
    case CONNECTION_STATE_CHANGE:
      return { ...state, online: action.payload }
    default: return state
  }
}
