import { showMessage } from 'react-native-flash-message'
import { Platform } from 'react-native'
//import gServices from '../android/app/google-services.json'
import { store } from './store'
import { colors } from './theme'

/**
 * Show error message with title and description (optional)
 * @param {string} error 
 * @param {string=} description 
 */
export const showError = (error, description) => showMessage({
  type: 'danger',
  message: error,
  description
})

/**
 * Show success message with title and description (optional)
 * @param {string} message 
 * @param {string=} description 
 */
export const showSuccess = (message, description) => showMessage({
  type: 'success',
  backgroundColor: colors.primary,
  message,
  description,
})