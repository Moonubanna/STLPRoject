
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    getCityApiReq,
    getCityApiSuccess,
    getCityApiFailed,

    postSearchApiReq,
    postSearchApiSuccess,
    postSearchApiFailed,

} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'
import * as Utils from '../utility/Utils'


export const getCityApi = (userData) => async dispatch => {

    await dispatch(getCityApiReq(userData))
    let url = API.GET_CITY;
    console.log('request data:--', url);

    return axios.get(
        url, {
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        dispatch(getCityApiSuccess(res.data))
        return (res.data)
    })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(getCityApiFailed(message))
            //showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const postSearchApi = (userData) => async dispatch => {

    await dispatch(postSearchApiReq(userData))
    let url = API.POST_SEARCH
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('city_id', userData.city_id);
    formData.append('category_id', userData.category_id);
    formData.append('sub_category_id', userData.sub_category_id);
    formData.append('keyword', userData.keyword);

    return axios.post(
        url,formData, {
        headers: {
            'content-type': 'application/json',
        }
    }).then((res) => {
        dispatch(postSearchApiSuccess(res.data))
        return (res.data)
    })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(postSearchApiFailed(message))
            //showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            Utils.logoutUser()
            return (err)
        })
}
