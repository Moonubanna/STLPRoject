import {
  APP_START_FAIL,
  APP_START_SUCCESS,
  APP_START,
  CONNECTION_STATE_CHANGE,
} from '../constants'

export function appStart() {
  return { type: APP_START }
}

export function appStartSuccess() {
  return { type: APP_START_SUCCESS }
}

export function appStartFail(error) {
  return { type: APP_START_FAIL, error }
}

export function connectionStateChanged(online) {
  return { type: CONNECTION_STATE_CHANGE, payload: online }
}