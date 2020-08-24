
import {
    BASE_URL, API
} from '../constants'
import translate from '../i18n/i18n'

import {
    signUPApiReq,
    signUPApiSuccess,
    signUPApiFailed,

    countryApiReq,
    countryApiSuccess,
    countryApiFailed,

    stateApiReq,
    stateApiSuccess,
    stateApiFailed,

    cityApiReq,
    cityApiSuccess,
    cityApiFailed
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import { showErrorToast, showErrorFailToast } from '../utility/Toast'

//Post country
export const countryApi = (userData) => async dispatch => {

    await dispatch(countryApiReq(userData))
    let url = API.POST_COUNTRY
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('name', 'name');

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(countryApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(countryApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const stateApi = (userData) => async dispatch => {

    await dispatch(stateApiReq(userData))
    let url = API.POST_STATE
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('country_id', userData.country_id);

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(stateApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(stateApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const cityApi = (userData) => async dispatch => {

    await dispatch(cityApiReq(userData))
    let url = API.POST_CITY
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('country_id', userData.country_id);

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(cityApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(cityApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}

export const signUpUserApi = (userData) => async dispatch => {

    await dispatch(signUPApiReq(userData))
    let url = API.POST_SIGNUP_USER
    console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email_address', userData.email_address);
    formData.append('password', userData.password);
    formData.append('mobile_number', userData.mobile_number);
    formData.append('device_token', userData.device_token);
    formData.append('country_id', userData.country_id);
    formData.append('state_id', userData.state_id);
    formData.append('city_id', userData.city_id);
    formData.append('image', userData.image);
    formData.append('profession', userData.profession);
    formData.append('gender', userData.gender);

    return axios.post(
        url, userData, {
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
            dispatch(signUPApiSuccess(res))
            return (res.data)
        })
        .catch((err) => {
            const message = "Server don't response correctly";
            dispatch(signUPApiFailed(message))
            showErrorFailToast(translate('MESSAGE_SERVER_ERROR'))
            return (err)
        })
}


