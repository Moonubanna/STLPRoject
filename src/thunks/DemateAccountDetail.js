
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    demateLinkApiReq,
    demateLinkApiSuccess,
    demateLinkApiFailed,

    demateDetailApiReq,
    demateDetailApiSuccess,
    demateDetailApiFailed
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'


export const demateDetailApi = (userData) => async dispatch => {

    await dispatch(demateDetailApiReq(userData))
    let url = API.POST_DEMATE_DETAIL
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('account_id', userData.account_id);
    formData.append('user_id', userData.user_id);

    return axios.post(
        url, formData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
        dispatch(demateDetailApiSuccess(res))
        return (res.data)
    })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(demateDetailApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}