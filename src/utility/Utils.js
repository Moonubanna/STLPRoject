import {
    APP_PARAMS, KEY, SCREEN, MAX_LENGTH_OF_PHONE_NUMBER, MIN_LENGTH_OF_PHONE_NUMBER,
    KEY_MINIMUMLENGTHOFNAME, KEY_MAXLENGTHOFNAME, KEY_MAXLENGTHOFPASSWORD, KEY_MINIMUMLENGTHOFPASSWORD, KEY_MINIMUMLENGTHOFCITY
} from '../constants'
//import DeviceInfo from 'react-native-device-info';
import { storeData, retrieveData, clearData } from '../common/AsyncStorage'
import NavigationService from '../NavigationService';
import { colors } from '../theme';
import moment from 'moment';
import translate from '../i18n/i18n';
import { showMessage } from 'react-native-flash-message'
import Toast from 'react-native-tiny-toast';
/**
 * Show error message with title and description (optional)
 * @param {string} error 
 * @param {string=} description 
 */
export const showError = (error, description) => showMessage({
    type: 'danger',
    message: error,
    description,
    position: 'top'
})

/**
 * Show success message with title and description (optional)
 * @param {string} message 
 * @param {string=} description 
 */
export const showSuccess = (message, description) => showMessage({
    type: 'success',
    backgroundColor: colors.red600,
    message,
    description,
    position: 'top'
})

export const getDeviceId = () => {
    //return DeviceInfo.getUniqueId();
}

export const logoutUser = async () => {
    await clearData(KEY.USER_DATA)
    NavigationService.clearStack(SCREEN.LOGIN);
}



export const getUserDetail = (key) => {
    retrieveData(key, (result => {
        return result
    }))
}
export const copvertHtmlTotext = (txt) => {
    var text = txt.split(/[^A-Za-z]/).filter(x => x !== '').slice(1, -1).join(' ')
    return text
}

export const convertDateTimeFormate = (date) => {
    moment.locale('en');
    var dt = date;
    return moment(dt).format('MMMM Do, YYYY H:mma')//basically you can do all
}

export const convertDateObjFormat = (dateTime, forShowFormat) => {

    var showDateValue = '';
    if (dateTime !== null || dateTime !== undefined) {
        showDateValue = moment(dateTime).format(forShowFormat)
    }
    return showDateValue;
}

export function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const lessThan18 = () => {
    let doctorValidDob = new Date().getTime() - 18 * 1000 * 60 * 60 * 24 * 365.25
    let validyear = doctorValidDob//this.state.groupid== Constants.USER_TYPE_DOCTOR_ID ? doctorValidDob : new Date()
    console.warn('jj :: ', validyear);
    return validyear;
}

//Validation 
export const isValidFullName = (name, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (name == undefined) {

        msg = translate('FULL_NAME_EMPTY')

    } else if (name == null) {

        msg = translate('FULL_NAME_EMPTY')

    }
    else if (name == '') {

        msg = translate('FULL_NAME_EMPTY')

    }
    else if (name.length < KEY_MINIMUMLENGTHOFNAME) {

        msg = translate('FULL_NAME_MIN_LENGTH')

    }

    else if (name.length > KEY_MAXLENGTHOFNAME) {

        msg = translate('FULL_NAME_MAX_LENGTH')

    }

    if (msg != '' && showPopUp) {
        isValid = false;
        //alert(msg)
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}

export const isValidEmail = (email, showPopUp) => {
    var isValid = true;
    var msg = '';
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == undefined) {

        msg = translate('EMPTY_EMAIL')

    } else if (email == null) {

        msg = translate('EMPTY_EMAIL')

    }
    else if (email == '') {

        msg = translate('EMPTY_EMAIL')

    }
    else if (reg.test(email) === false) {
        msg = translate('EMAIL_NOT_VALID')
        console.log(msg);
    }
    if (msg != '' && showPopUp) {
        isValid = false;
        //alert(msg)
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}

//Validation
export const isValidMobileNumber = (number, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (number == undefined) {

        msg = translate('EMPTY_PHONE')

    } else if (number == null) {

        msg = translate('EMPTY_PHONE')

    }
    else if (number == '') {
        msg = translate('EMPTY_PHONE');
    }
    else if (number.length < MIN_LENGTH_OF_PHONE_NUMBER ||
        number.length > MAX_LENGTH_OF_PHONE_NUMBER) {
        msg = translate('PHONE_LENGTH_ERROR');
    }

    if (msg != '' && showPopUp) {
        isValid = false;
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}


export const isValidOldPassword = (pasword, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (pasword == undefined) {

        msg = translate('OLD_PASSWORD_EMPTY')

    } else if (pasword == null) {

        msg = translate('OLD_PASSWORD_EMPTY')

    }
    else if (pasword == '') {
        msg = translate('OLD_PASSWORD_EMPTY');
    }

    if (msg != '' && showPopUp) {
        isValid = false;
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}


export const isValidNewPassword = (pasword, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (pasword == undefined) {

        msg = translate('CREATE_PASSWORD_EMPTY')

    } else if (pasword == null) {

        msg = translate('CREATE_PASSWORD_EMPTY')
    }
    else if (pasword == '') {
        msg = translate('CREATE_PASSWORD_EMPTY');
    }
    else if (pasword.length < KEY_MINIMUMLENGTHOFPASSWORD) {
        msg = translate('PASSWORD_LENGTH_ERROR');
    }

    else if (pasword.length > KEY_MAXLENGTHOFPASSWORD) {
        msg = translate('PASSWORD_MAX_LENGTH_ERROR');
    }

    if (msg != '' && showPopUp) {
        isValid = false;
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}


export const isValidConfirmPassword = (pasword, cPassword, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (cPassword == undefined) {

        msg = translate('C_PASSWORD_EMPTY')

    } else if (cPassword == null) {

        msg = translate('C_PASSWORD_EMPTY')
    }
    else if (cPassword == '') {
        msg = translate('C_PASSWORD_EMPTY');
    }
    else if (pasword !== cPassword) {
        msg = translate('BOTH_PASSWORD_NOT_MATCH');
    }

    if (msg != '' && showPopUp) {
        isValid = false;
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}

//City 
export const isValidCity = (city, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (city == undefined) {

        msg = translate('EMPTY_CITY')

    } else if (city == null) {

        msg = translate('EMPTY_CITY')

    }
    else if (city == '') {

        msg = translate('EMPTY_CITY')

    }
    else if (city.length < KEY_MINIMUMLENGTHOFCITY) {
        msg = translate('SEARCH_LENGTH_ERROR');
    }

    if (msg != '' && showPopUp) {
        isValid = false;
        //alert(msg)
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}
//State 
export const isValidState = (state, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (state == undefined) {

        msg = translate('EMPTY_STATE')

    } else if (state == null) {

        msg = translate('EMPTY_STATE')

    }
    else if (state == '') {

        msg = translate('EMPTY_STATE')

    }

    if (msg != '' && showPopUp) {
        isValid = false;
        //alert(msg)
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}

//Country 
export const isValidCountry = (country, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (country == undefined) {

        msg = translate('EMPTY_COUNTRY')

    } else if (country == null) {

        msg = translate('EMPTY_COUNTRY')

    }
    else if (country == '') {

        msg = translate('EMPTY_COUNTRY')

    }

    if (msg != '' && showPopUp) {
        isValid = false;
        //alert(msg)
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}

export const getFormDataFromObject = (data) => {
    const formData = new FormData();
    for (var key in data) {
        if (typeof data[key] === 'object') {
            var dataValue = data[key];
            console.log("dataValue::--", dataValue);

            if (key == 'image') {
                dataValue.forEach((element, i) => {

                    formData.append('image', element)
                });

            }

            else {
                if (dataValue !== null && dataValue.uri !== undefined && dataValue.uri !== null) {
                }
                else {
                    if (dataValue != null) {

                        dataValue = ((JSON.stringify(dataValue)));
                        dataValue = dataValue.replace(/\\/g);
                    }
                }
                if (dataValue != undefined && dataValue != null) {
                    formData.append(key, dataValue);
                }
            }
        }
        else {
            if (data[key] != undefined && data[key] != null) {
                formData.append(key, data[key]);
            }
        }
    }
    return formData;
}

export const getShortNameFromName = (str) => {
    var shortName = '';

    if (str !== undefined && str.length > 0) {
        var res = str.split(" ");
        for (var words in res) {
            shortName += res[words].charAt(0).toUpperCase();
        }
    }
    return shortName;
}

export const isValidPassword = (pasword, showPopUp) => {
    var isValid = true;
    var msg = '';
    if (pasword == undefined) {

        msg = translate('CREATE_PASSWORD_EMPTY')

    } else if (pasword == null) {

        msg = translate('CREATE_PASSWORD_EMPTY')
    }
    else if (pasword == '') {
        msg = translate('CREATE_PASSWORD_EMPTY');
    }
    if (msg != '' && showPopUp) {
        isValid = false;
        showSuccess(translate('MESSAGE'), msg)
    }
    return isValid;
}
