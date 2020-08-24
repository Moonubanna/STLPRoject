import { Dimensions, Platform } from 'react-native'

export const BASE_URL = 'http://crowdforminds.com/STL/api/';

export const API = {

    // login register 
    POST_LOGIN_USER: BASE_URL + 'register/login',
    POST_SIGNUP_USER: BASE_URL + 'register/signup',
    POST_COUNTRY:BASE_URL + 'common/countries',
    POST_STATE:BASE_URL + 'common/states',
    POST_CITY:BASE_URL + 'common/cities',
    POST_LOGOUT:BASE_URL + 'user/logout',
    POST_MY_PROFILE:BASE_URL + 'user/myprofile',
    POST_UPDATE_PROFILE:BASE_URL + 'user/updateprofile',
    POST_DEMATE_LINK:BASE_URL + 'accounts/allaccounts',
    POST_DEMATE_DETAIL:BASE_URL + 'accounts/singleDematAccountDetail',

    //image base url path
    IMAGE_BASE_PATH: 'http://crowdforminds.com/STL/api/'
}

export const APP_PARAMS = {

    ROLE: "role",
    SUPER_ADMIN: 'superAdmin',

    LAT: 'lat',
    LNG: 'lng',
    COUNTRY_LONG_NAME: 'COUNTRY_LONG_NAME',
    COUNTRY_SHORT_NAME: 'COUNTRY_SHORT_NAME',
    STATE_LONG_NAME: 'STATE_LONG_NAME',
    STATE_SHORT_NAME: 'STATE_SHORT_NAME',
    CITY_LONG_NAME: 'CITY_LONG_NAME',
    CITY_SHORT_NAME: 'CITY_SHORT_NAME',
    POSTAL_CODE: 'postCode',
    FORMATED_ADDRESS: 'FORMATED_ADDRESS',
}
export const KEY = {
    //MapGhana use
    PARAMS_NAME: 'name',
    PARAMS_EMAIL: 'email_address',
    PARAMS_IMAGE: 'image',
    USER_DATA: 'userdata',
    USER_CITY_DATA: 'usercitydata',
    NAME: 'name',
    AS_GUESt_USER: 'AS_GUESt_USER',
    NEWS_SELECTED_DATA: 'news_selected_data',
    SUCCESS_: true,
    FAILED_: false
}

export const LOCALES = {
    ENGLISH: { id: 1, name: "en", label: "ENGLISH" },
    HINDI: { id: 2, name: "hi", label: "हिंदी" }
};

export const FONT_FAMILIY = {
    Font_Black: Platform.OS == 'android' ? 'OpenSans-Bold' : 'OpenSans-Bold',
    Font_Bold_Fully: Platform.OS == 'android' ? 'OpenSans-Bold' : 'OpenSans-Bold',
    Font_Bold: Platform.OS == 'android' ? 'OpenSans-SemiBold' : 'OpenSans-SemiBold',
    Font_Light: Platform.OS == 'android' ? 'OpenSans-Light' : 'OpenSans-Light',
    Font_Medium: Platform.OS == 'android' ? 'OpenSans-SemiBold' : 'OpenSans-SemiBold',
    Font_Regular: Platform.OS == 'android' ? 'OpenSans-Regular' : 'OpenSans-Regular',
    Ittalian: 'OpenSans-Italic',
}

export const DIMENS = {
    px_0: 0,
    px_05: 0.5,
    px_1: 1,
    px_2: 2,
    px_3: 3,
    px_5: 5,
    px_7: 7,
    px_8: 8,
    px_10: 10,
    px_12: 12,
    px_300: 300,
    px_14: 14,
    px_15: 15,
    px_15: 16,
    px_18: 18,
    px_20: 20,
    px_22: 22,
    px_23: 23,
    px_25: 25,
    px_28: 28,
    px_30: 30,
    px_32: 32,
    px_35: 35,
    px_40: 40,
    px_45: 45,
    px_50: 50,
    px_60: 60,
    px_65: 65,
    px_70: 70,
    px_75: 75,
    px_80: 80,
    px_90: 90,
    px_100: 100,
    px_110: 110,
    px_120: 120,
    px_130: 130,
    px_140: 140,
    px_150: 150,
    px_160: 160,
    px_180: 180,

    px_200: 200,
    px_220: 220,
    px_230: 230,
    px_250: 250,

    btn_font_size: 16,
    btn_h: 40,
    devider_h: 1,
    devider_h_half: 0.5,
    devider_h_1: 1,
    txt_size_small_small: 10,
    txt_size_small: 11,
    txt_size_small_12: 12,
    txt_size_min_small: 8,
    txt_size_min_small_9: 9,
    txt_size_medium: 13,
    txt_size_medium_14: 14,
    txt_size_medium_1: 15,
    txt_size_large: 16,
    txt_size_large_extra: 18,
    txt_size_large_extra_20: 20,
    txt_size_large_extra_26: 26,
    txt_size_large_extra_30: 30,
    txt_size_large_extra_40: 40,
    row_h: 50,
    minHeight: 50,
    row_img_w: 60,
    row_img_big: 70,
    row_img_w_2: 50,
    tab_width: 24,

    //Category Size
    cat_img_width: 55,
    cat_img_height: 55,
    cat_img_radius: 27.5
}


export const CURRENCY = {
    RUPEES: '\u20B9',
    DOLLER: '\u0024',
    EURO: '\u20AC',
    JAPANES_YEN: '\u00A5',
    POUND_STERLING: '\u00A3'
}
export const SCREEN = {
    LOGIN: 'Login',
    SIGNUP: 'Signup',
    OTP_VERIFICATION:'OTPVerification',
    DASHBOARD: 'Dashboard',
    COMMON_PAGES: 'CommonPages',
    //STL Course
    SCREEN_STL_COURSE_SELECTION: 'STLCourseSelection',
    SCREEN_STL_COURSE_LIST: 'STLCourseList',
    SCREEN_STL_COURSE_TCONDITION: 'STLCourseTandC',
    SCREEN_STL_COURSE_PAY: 'STLCoursePay',
    SCREEN_STL_COURSE_PROGRAMS: 'STLCoursePrograms',
    SCREEN_STL_COURSE_PROGRAMS_PLAY: 'STLCourseProgramsPlay',
    SCREEN_STL_YOUTUBE_VIDEOS: 'STLYoutubeVideos',
    SCREEN_OUR_YOUTUBE_VIDEOS: 'OurYoutubeVideos',
    SCREEN_STL_FREE_MARKET_SUG: 'STLFreeMarketSug',
    SCREEN_EXCLUSIVE_LIVE_EVENT: 'ExclusiveLiveEvents',
    SCREEN_EXCLUSIVE_LIVE_TCONDITION: 'ExclusiveLiveTCondition',
    SCREEN_EXCLUSIVE_LIVE_PAY: 'ExclusivelivePay',
    SCREEN_EXCLUSIVE_LIVE_EVENT_DETAIL: 'ExclusiveLiveEventDetail',
    SCREEN_DEMATE_LINK_LIST: 'DemateLinksList',
    SCREEN_DEMATE_LINK_DETAIL: 'DemateAccountDetail',
    SCREEN_PARTNER_CODE: 'PartnerCode',
    SCREEN_MY_EARNING: 'MyEarning',
    SCREEN_MY_PROFILE: 'MyProfile',
    SCREEN_COMMON_PAGES: 'CommonPages',
    //STL Premium Club
    SCREEN_STL_PREMIUM_CLUB:'STLPremiumClub',

    //download stl my course
    SCREEN_STL_MY_COURSE_LIST: 'STLMyCourse',
}

//Usefull BancX
export const MAX_LENGTH_OF_PHONE_NUMBER = 12;
export const MIN_LENGTH_OF_PHONE_NUMBER = 10;
export const KEY_MINIMUMLENGTHOFNAME = 3;
export const KEY_MAXLENGTHOFNAME = 20;
export const KEY_MAXLENGTHOFPASSWORD = 20;
export const KEY_MINIMUMLENGTHOFPASSWORD = 6;
export const KEY_MINIMUMLENGTHOFCITY = 3;
export const DATE_FORMAT_SHOW = 'DD MMM YYYY';
export const DATE_FORMAT_SEND = 'YYYY-MM-DD';

//HEIGHT AND WIDTH
export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get('screen').height

//API FOR STL
//register
export const APP_SIGNUP_SUCESS = 'APP_SIGNUP_SUCESS'
export const APP_SIGNUP_FAIL = 'APP_SIGNUP_FAIL'
export const APP_SIGNUP_REQUEST = 'APP_SIGNUP_REQUEST'

export const APP_COUNTRY_SUCESS = 'APP_COUNTRY_SUCESS'
export const APP_COUNTRY_FAIL = 'APP_COUNTRY_FAIL'
export const APP_COUNTRY_REQUEST = 'APP_COUNTRY_REQUEST'

export const APP_STATE_SUCESS = 'APP_STATE_SUCESS'
export const APP_STATE_FAIL = 'APP_STATE_FAIL'
export const APP_STATE_REQUEST = 'APP_STATE_REQUEST'

export const APP_CITY_SUCESS = 'APP_CITY_SUCESS'
export const APP_CITY_FAIL = 'APP_CITY_FAIL'
export const APP_CITY_REQUEST = 'APP_CITY_REQUEST'

//login
export const APP_LOGIN_SUCESS = 'APP_LOGIN_SUCESS'
export const APP_LOGIN_FAIL = 'APP_LOGIN_FAIL'
export const APP_LOGIN_REQUEST = 'APP_LOGIN_REQUEST'

//MY PROFILE
export const APP_MY_PROFILE_SUCESS = 'APP_MY_PROFILE_SUCESS'
export const APP_MY_PROFILE_FAIL = 'APP_MY_PROFILE_FAIL'
export const APP_MY_PROFILE_REQUEST = 'APP_MY_PROFILE_REQUEST'

export const APP_UPDATE_PROFILE_SUCESS = 'APP_UPDATE_PROFILE_SUCESS'
export const APP_UPDATE_PROFILE_FAIL = 'APP_UPDATE_PROFILE_FAIL'
export const APP_UPDATE_PROFILE_REQUEST = 'APP_UPDATE_PROFILE_REQUEST'

//Demate account
export const APP_DEMATE_LINK_SUCESS = 'APP_DEMATE_LINK_SUCESS'
export const APP_DEMATE_LINK_FAIL = 'APP_DEMATE_LINK_FAIL'
export const APP_DEMATE_LINK_REQUEST = 'APP_DEMATE_LINK_REQUEST'

export const APP_DEMATE_DETAIL_SUCESS = 'APP_DEMATE_DETAIL_SUCESS'
export const APP_DEMATE_DETAIL_FAIL = 'APP_DEMATE_DETAIL_FAIL'
export const APP_DEMATE_DETAIL_REQUEST = 'APP_DEMATE_DETAIL_REQUEST'

export const APP_LOGOUT_REQUEST = 'APP_LOGOUT_REQUEST'









// Internet connection state
export const APP_START = 'APP_START'
export const APP_START_SUCCESS = 'APP_START_SUCCESS'
export const APP_START_FAIL = 'APP_START_FAIL'
export const CONNECTION_STATE_CHANGE = 'CONNECTION_STATE_CHANGE'
// User authentication
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL'
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL'
export const AUTH_GET_SESSION_REQUEST = 'AUTH_GET_SESSION_REQUEST'
export const AUTH_GET_SESSION_SUCCESS = 'AUTH_GET_SESSION_SUCCESS'
export const AUTH_GET_SESSION_FAIL = 'AUTH_GET_SESSION_FAIL'
export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
export const passRegex = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%])(^[a-zA-Z0-9@$#%]+$)/
////?-i)(?=^.{8,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z]))((?=(.*\d){1,})|(?=(.*\W){1,}))^.*$/



