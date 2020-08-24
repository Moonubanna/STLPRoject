
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    loginApiReq,
    loginApiSuccess,
    loginApiFailed,

    checkDocumentApiReq,
    checkDocumentApiSuccess,
    checkDocumentApiFailed
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'


export const loginUserApi = (userData) => async dispatch => {

    await dispatch(loginApiReq(userData))
    let url = API.POST_LOGIN_USER
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('email_address', userData.email_address);
    formData.append('password', userData.password);
    formData.append('device_token', userData.device_token);

    return axios.post(
        url, formData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(loginApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(loginApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}