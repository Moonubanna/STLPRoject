
import {
  appStart,
  appStartFail,
  appStartSuccess,
  connectionStateChanged,
} from '../actionCreators'

export const appStartThunk = config => dispatch => {
  dispatch(appStart())
  return dispatch(appStartSuccess())
}

export const trackAppState = (appState) => (dispatch, getState) => {
  if (appState.match(/inactive|background/)) {
    console.warn('background')
  } else {
    console.warn('active')
  }
}

export const connectionStateHandler = info => (dispatch, getState) => {
  const { app } = getState()
  if (app.online !== info.isConnected) {
    dispatch(connectionStateChanged(info.isConnected))
  }
}
