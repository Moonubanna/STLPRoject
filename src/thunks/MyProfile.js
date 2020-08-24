
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    myProfileApiReq,
    myProfileApiSuccess,
    myProfileApiFailed,

    updateProfileApiReq,
    updateProfileApiSuccess,
    updateProfileApiFailed,

    countryMyProfileApiReq,
    countryMyProfileApiSuccess,
    countryMyProfileApiFailed,

    stateMyProfileApiReq,
    stateMyProfileApiSuccess,
    stateMyProfileApiFailed,

    cityMyProfileApiReq,
    cityMyProfileApiSuccess,
    cityMyProfileApiFailed
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'


export const myProfileApi = (userData) => async dispatch => {

    await dispatch(myProfileApiReq(userData))
    let url = API.POST_MY_PROFILE
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('user_id', userData.user_id);
    formData.append('device_token', userData.device_token);

    return axios.post(
        url, formData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(myProfileApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(myProfileApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const updateProfileApi = (userData) => async dispatch => {

    await dispatch(updateProfileApiReq(userData))
    let url = API.POST_UPDATE_PROFILE
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('user_id', userData.user_id);
    formData.append('name', userData.name);
    formData.append('email_address', userData.email_address);
    formData.append('mobile_number', userData.mobile_number);
    formData.append('country_id', userData.country_id);
    formData.append('state_id', userData.state_id);
    formData.append('city_id', userData.city_id);
    formData.append('device_token', userData.device_token);

    return axios.post(
        url, formData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(updateProfileApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(updateProfileApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}


//Post country
export const countryMyProfileApi = (userData) => async dispatch => {

    await dispatch(countryMyProfileApiReq(userData))
    let url = API.POST_COUNTRY
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('name', 'name');

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(countryMyProfileApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(countryMyProfileApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const stateMyProfileApi = (userData) => async dispatch => {

    await dispatch(stateMyProfileApiReq(userData))
    let url = API.POST_STATE
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('country_id', userData.country_id);

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(stateMyProfileApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(stateMyProfileApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const cityMyProfileApi = (userData) => async dispatch => {

    await dispatch(cityMyProfileApiReq(userData))
    let url = API.POST_CITY
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('country_id', userData.country_id);

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(cityMyProfileApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(cityMyProfileApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}