

import React from 'react';
import Toast from 'react-native-tiny-toast';
import {colors} from '../../src/theme'

let toast;
export function showToast(message, type, duration = 2000) {
    Toast.show(message, {
        position:-1,
        duration: duration,
        textColor: colors.black,
        containerStyle: {
            backgroundColor:  colors.green600,
            // type == 'success' ? colors.green
            //     : type == 'error' ? colors.primary_fade : type == 'info'
            //         ? colors.primary_fade : 'white',
            
            width:'100%',
            padding: 15,
            borderRadius:0,
            marginBottom: -1,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
        },
    });
}



export function hideLoading() {
    Toast.hide(toast);
}



export function showLoading(message = '') {
    toast = Toast.showLoading(message, {
        position: 'absolute',
        containerStyle: {
            padding: 20,
            backgroundColor: colors.primary,
        },
        textColor: 'white',
        textstyle: { fontSize: 16 },
    });

}



export function showErrorToast(message) {
    Toast.show(message, {
        position:1,
        duration: 1000,
        textColor: colors.white,
        containerStyle: {
            backgroundColor:  colors.red600,
            width:'100%',

            padding: 15,
            borderRadius:0,
            marginTop: -1,
           // borderTopLeftRadius:15,
            //borderTopRightRadius:15,
        },
    });
 //showToast(message, 'error');
}
export function showErrorFailToast(message) {
    Toast.show(message, {
        position:1,
        duration: 1000,
        textColor: colors.white,
        containerStyle: {
            backgroundColor:  colors.red400,
            width:'100%',

            padding: 15,
            borderRadius:0,
            marginTop: -1,
           // borderTopLeftRadius:15,
            //borderTopRightRadius:15,
        },
    });
}



export function showSuccessToast(message) {
    showToast(message, 'success');
}

export function showInfoToast(message, duration) {
    if (duration != undefined) {
        showToast(message, 'info', 3000);
    } else {
        showToast(message, 'info');
    }
}

