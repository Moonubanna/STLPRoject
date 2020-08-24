import React from 'react'
import { Image, TouchableOpacity, View, Text, DeviceEventEmitter, Platform, Alert, FlatList, ScrollView } from 'react-native'
//import { SHOP_CART, MENU, NOTIFICATION ,PROFILE} from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'
import {
    LOGO, AVTAR, IC_LOGOUT,
    DRAWER_1,
    DRAWER_2,
    DRAWER_3,
    DRAWER_4,
    DRAWER_5,
    DRAWER_6,
    DRAWER_7,
    DRAWER_8,
    DRAWER_9,
    DRAWER_10,
    DRAWER_11,
    DRAWER_12,
    DRAWER_13,
    DRAWER_14,
    DRAWER_15,
    DRAWER_16,
} from '../images'
import { WIDTH, KEY, APP_PARAMS, FONT_FAMILIY, SCREEN, API } from '../constants/index'
import { colors } from '../theme'
import { DIMENS, CURRENCY } from '../constants'
import translate from '../i18n/i18n'
import NavigationService from '../NavigationService'
import { storeData, retrieveData, clearData } from '../common/AsyncStorage'
import { IconX, ICON_TYPE, } from '../utility/Icons';
import { EventRegister } from 'react-native-event-listeners';
import axios from 'axios'
import { showErrorToast, showErrorFailToast, showToast } from '../utility/Toast'


const drawerListFirst = [
    { id: 1, title: translate('DRAWER_HOME'), subTitle: translate('DRAWER_HOME'), is_selected: false, icon_name: DRAWER_1 },
    { id: 2, title: translate('DRAWER_MY_COURSES'), subTitle: translate('DRAWER_MY_COURSES'), is_selected: false, icon_name: DRAWER_2 },
    { id: 3, title: translate('DRAWER_STL_MARKET_VIEW'), subTitle: translate('DRAWER_STL_MARKET_VIEW'), is_selected: false, icon_name: DRAWER_3 },
    { id: 4, title: translate('DRAWER_OUR_YOUTUBE_VIDEOS'), subTitle: translate('DRAWER_OUR_YOUTUBE_VIDEOS'), is_selected: false, icon_name: DRAWER_4 },
    { id: 5, title: translate('DRAWER_EXCLUSIVE_LIVE_EVENT'), subTitle: translate('DRAWER_EXCLUSIVE_LIVE_EVENT'), is_selected: false, icon_name: DRAWER_5 },
    { id: 6, title: translate('DRAWER_OPEN_DEMAT_ACCOUNT'), subTitle: translate('DRAWER_OPEN_DEMAT_ACCOUNT'), is_selected: false, icon_name: DRAWER_6 },
    { id: 7, title: translate('DRAWER_CONTACT'), subTitle: translate('DRAWER_CONTACT'), is_selected: false, icon_name: DRAWER_7 },
    { id: 8, title: translate('DRAWER_PRIVACY_POLICY'), subTitle: translate('DRAWER_PRIVACY_POLICY'), is_selected: false, icon_name: DRAWER_8 },
    { id: 9, title: translate('DRAWER_REFUND_POLICY'), subTitle: translate('DRAWER_REFUND_POLICY'), is_selected: false, icon_name: DRAWER_9 },
    { id: 10, title: translate('DRAWER_FEEDBACK'), subTitle: translate('DRAWER_FEEDBACK'), is_selected: false, icon_name: DRAWER_10 },
    { id: 11, title: translate('DRAWER_ABOUT_US'), subTitle: translate('DRAWER_ABOUT_US'), is_selected: false, icon_name: DRAWER_11 },
    { id: 12, title: translate('DRAWER_PARTNER_CODE'), subTitle: translate('DRAWER_PARTNER_CODE'), is_selected: false, icon_name: DRAWER_12 },
    { id: 13, title: translate('DRAWER_CUSTOMER_CARE'), subTitle: translate('DRAWER_CUSTOMER_CARE'), is_selected: false, icon_name: DRAWER_13 },
    { id: 24, title: translate('DRAWER_LOGOUT'), subTitle: translate('DRAWER_LOGOUT'), is_selected: false, icon_name: DRAWER_14 },
]

//Icons
import Icon from 'react-native-vector-icons/Octicons';

export default class CustomDrawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoginObj: undefined,
            name: global[KEY.USER_DATA] != undefined && global[KEY.USER_DATA].user[KEY.PARAMS_NAME] != undefined ? global[KEY.USER_DATA].user[KEY.PARAMS_NAME] : 'Praveen singh',
            email: global[KEY.USER_DATA] != undefined && global[KEY.USER_DATA].user[KEY.PARAMS_EMAIL] != undefined ? global[KEY.USER_DATA].user[KEY.PARAMS_EMAIL] : 'praveen36singh@gmail.com',
            //image: global[KEY.USER_DATA] != undefined && global[KEY.USER_DATA].user[KEY.PARAMS_IMAGE] != undefined ? global[KEY.USER_DATA].user[KEY.PARAMS_IMAGE] : undefined,
            drawerListFirstArr: drawerListFirst
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        retrieveData(KEY.USER_DATA, result => {
            if (result != undefined && result) {
                console.log('LOGINDDD' + JSON.stringify(result))
                this.setState({
                    userLoginObj: result.user,
                    name: result.user.name,
                    email: result.user.email_address,
                })
            }
        })
        this.listener = EventRegister.addEventListener('UPDATE_LOGIN_USER_DATA', (data) => {
            console.log('UPDATE_LOGIN_USER_DATA', data)
            if (data == 'clear_login_data') {
                this.setState({
                    name: undefined,
                    email: undefined,
                    image: undefined,
                })
            } else {
                retrieveData(KEY.USER_DATA, result => {
                    if (result != undefined && result) {
                        console.log('LOGINDDD' + JSON.stringify(result))
                        this.setState({
                            userLoginObj: result.user,
                            name: result.user.name,
                            email: result.user.email_address,
                        })
                    }
                })
            }
        })
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 3,
                    width: '100%', alignItems: 'center',
                    backgroundColor: colors.transparent,
                }}
            />
        );
    }
    componentWillUnmount = () => {
        //this.focusListener.remove();
    }

    logoutUserApi = async (userData) => {
        if (userData != undefined) {
            let url = API.POST_LOGOUT
            console.log('request data:--', url + '\n\n' + JSON.stringify(userData));
            const formData = new FormData();
            formData.append('user_id', userData.id);

            console.log('request data1:--', JSON.stringify(formData));

            await axios.post(
                url, formData, {
                headers: { 'content-type': 'application/json' }
            }).then((res) => {
                showToast(res.message)
                console.warn('entrr1')
                this.clearLoginData()
            })
                .catch((err) => {
                    const message = "Server don't response correctly";
                    showErrorFailToast(translate('MESSAGE_SERVER_ERROR') + JSON.stringify(err))
                    this.clearLoginData()
                })

        } else {
            this.clearLoginData()
        }
    }

    clearLoginData = async () => {
        console.warn('entrr2')
        global[KEY.USER_DATA] = undefined
        console.warn('entrr3')
        await clearData(KEY.USER_DATA)
        NavigationService.clearStack(SCREEN.LOGIN)
    }

    drawerPress = async (item, index) => {
        this.props.navigation.closeDrawer()
        switch (item.title) {
            case translate('DRAWER_HOME'):
                this.itemSelected(item)
                break;
            case translate('DRAWER_MY_COURSES'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_MY_COURSE_LIST, params: { param: { screen_name: 'Drawer' } }, });
                break;
            case translate('DRAWER_STL_MARKET_VIEW'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_YOUTUBE_VIDEOS, params: { param: {} }, });
                break;
            case translate('DRAWER_OUR_YOUTUBE_VIDEOS'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_OUR_YOUTUBE_VIDEOS, params: { param: {} }, });
                break;
            case translate('DRAWER_EXCLUSIVE_LIVE_EVENT'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_EXCLUSIVE_LIVE_EVENT, params: { param: {} }, });
                break;
            case translate('DRAWER_OPEN_DEMAT_ACCOUNT'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_DEMATE_LINK_LIST, params: { param: {} }, });
                break;
            case translate('DRAWER_PARTNER_CODE'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_PARTNER_CODE, params: { param: {} }, });
                break;
            case translate('DRAWER_ABOUT_US'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_COMMON_PAGES, params: { param: translate('HEADER_ABOUT_US') }, });
                break;
            case translate('DRAWER_PRIVACY_POLICY'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_COMMON_PAGES, params: { param: translate('HEADER_PRIVACY_POLICY') }, });
                break;
            case translate('DRAWER_REFUND_POLICY'):
                this.itemSelected(item)
                //NavigationService.popToTop()
                NavigationService.navigate({ routeName: SCREEN.SCREEN_COMMON_PAGES, params: { param: translate('HEADER_REFUND_POLICY') }, });
                break;
            case translate('DRAWER_LOGOUT'):
                this.itemSelected(item)
                this.logoutUserApi(this.state.userLoginObj)
                break;

            default:
                break;
        }
    }

    itemSelected = (item) => {

    }
    renderDrawerList = (item, index) => {
        if (item.title == translate('DRAWER_LOGOUT')) {

            return (
                <Ripple style={{
                    flexDirection: 'row',
                    paddingLeft: DIMENS.px_10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: colors.color_button_blue
                }}
                    onPress={() => this.drawerPress(item, index)}>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: DIMENS.px_10,
                        paddingHorizontal: DIMENS.px_8
                    }}>
                        <View style={{
                            width: '80%',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <Image
                                style={{
                                    width: DIMENS.px_20,
                                    height: DIMENS.px_20,
                                    tintColor: colors.white
                                }}
                                source={item.icon_name}
                                resizeMode={'contain'}
                            />
                            <Text style={{
                                flex: 1,
                                //color: item.is_selected ? colors.color_accent : colors.white,
                                color: colors.white,
                                marginLeft: DIMENS.px_10,
                                fontSize: DIMENS.txt_size_medium_14,
                                fontFamily: FONT_FAMILIY.Font_Regular
                            }}>{item.title}</Text>
                        </View>
                        <View style={{
                            width: '20%',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <IconX
                                origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                name='arrow-right'
                                color={colors.white}
                                size={16}
                            />
                        </View>
                    </View>
                </Ripple>
            )
        } else {
            return (
                <Ripple style={{
                    flexDirection: 'row',
                    paddingLeft: DIMENS.px_10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: colors.color_primary
                }}
                    onPress={() => this.drawerPress(item, index)}>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: DIMENS.px_10,
                        paddingHorizontal: DIMENS.px_8
                    }}>
                        <View style={{
                            width: '80%',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}>
                            <Image
                                style={{
                                    width: DIMENS.px_20,
                                    height: DIMENS.px_20,
                                    tintColor: colors.white
                                }}
                                source={item.icon_name}
                                resizeMode={'contain'}
                            />
                            <Text style={{
                                flex: 1,
                                //color: item.is_selected ? colors.color_accent : colors.white,
                                color: colors.white,
                                marginLeft: DIMENS.px_10,
                                fontSize: DIMENS.txt_size_medium_14,
                                fontFamily: FONT_FAMILIY.Font_Regular
                            }}>{item.title}</Text>
                        </View>
                        <View style={{
                            width: '20%',
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <IconX
                                origin={ICON_TYPE.SIMPLE_LINE_ICON}
                                name='arrow-right'
                                color={colors.white}
                                size={16}
                            />
                        </View>
                    </View>
                </Ripple>
            )
        }
    }
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                style={{
                    backgroundColor: colors.color_primary_dark
                }}
                bounces={false}>

                <Ripple
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        width: '100%',
                        padding: DIMENS.px_15,
                        backgroundColor: colors.color_primary_dark
                    }}
                    onPress={() => {
                        this.props.navigation.closeDrawer()
                        //NavigationService.navigate({ routeName: SCREEN.SCREEN_PROFILE, params: { param: {} }, });
                    }}>
                    {/* Left view */}
                    <View style={{
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            style={{
                                width: DIMENS.px_100,
                                height: DIMENS.px_100,
                                borderRadius: DIMENS.px_100 / 2,
                                borderColor: colors.color_button_blue,
                                borderWidth: DIMENS.px_2
                            }}
                            resizeMode={'cover'}
                            source={AVTAR}
                        />
                        <View
                            style={{
                                marginTop: DIMENS.px_10,
                                flexDirection: 'column'
                            }}>
                            <Text style={{
                                color: colors.color_button_blue,
                                fontFamily: FONT_FAMILIY.Font_Medium,
                                fontSize: DIMENS.txt_size_large,
                                textAlign: 'center'
                            }}
                                numberOfLines={1}>{this.state.name}</Text>
                            <Text style={{
                                color: colors.color_button_blue,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_small_12,
                                marginTop: DIMENS.px_5,
                                textAlign: 'center'
                            }}
                                numberOfLines={1}>{this.state.email}</Text>
                        </View>
                    </View>

                    {/* Right view */}

                </Ripple>
                <View style={{
                    flex: 1,
                    backgroundColor: colors.color_primary_dark
                }}>
                    <FlatList
                        data={this.state.drawerListFirstArr}
                        renderItem={({ item, index }) => this.renderDrawerList(item, index)}
                        extraData={this.state}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>)
    }
}

