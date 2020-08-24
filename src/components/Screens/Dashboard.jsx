import React from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text, Image,
    TouchableOpacity, FlatList,
    View, Dimensions, TextInput, DeviceEventEmitter, TouchableHighlight,
    Alert,
    ImageBackground
} from 'react-native'
import styles from '../Auth/styles'
import { colors } from '../../theme';
import { LOGO, IC_PLAYER_ICON, IC_DUMMY_PAGER, IC_PLAN_BACKGROUND } from '../../images'
import CommonHeaderHome from '../../common/CommonHeaderHome'
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
import { showInfoToast, showErrorToast, showToast } from '../../utility/Toast'
import Loader from '../../common/Loader'
import NavigationService from '../../NavigationService';
import { element } from 'prop-types';
import * as Utils from '../../utility/Utils'
import ActionSheet from 'react-native-actionsheet'

//Library
import Orientation from 'react-native-orientation';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal'
import CardView from 'react-native-cardview'
import moment from 'moment';
import ViewPager from '@react-native-community/viewpager';
import { EventRegister } from 'react-native-event-listeners';
import { IconX, ICON_TYPE } from '../../utility/Icons';
import { showMessage } from 'react-native-flash-message';

const { height, width } = Dimensions.get('screen')

export default class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            searchTxtField: '',
            topViewPagerArray: [1, 2, 3],
            latestNewsArray: [1, 2, 3],
            tredingArray: [1, 2, 3, 4, 5],
            populerEventArray: [1, 2, 3, 4, 5]
        }
    }
    componentDidMount() {
        console.log('componentDidMount of Dashboard screen')
        Orientation.lockToPortrait();
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            // The screen is focused
            retrieveData(KEY.USER_DATA, result => {
                if (result != undefined && result) {
                    EventRegister.emit('UPDATE_LOGIN_USER_DATA', 'add_login_data')
                }
            })
        });
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Dashboard screen')
        // Remove the event listener
        this.focusListener.remove();
    }

    render() {
        const { data, loading } = this.props
        return (
            <View style={{
                backgroundColor: colors.color_primary_dark,
                flex: 1,
                width: '100%',
            }}>
                <CommonHeaderHome
                    menuPress={() => this.props.navigation.openDrawer()}
                    rightProfilePress={() => {
                        NavigationService.navigate({ routeName: SCREEN.SCREEN_MY_PROFILE, params: { param: {} }, });
                    }}
                    isBack={false}
                    isRightIcon={true}
                    isRightNoti={false}
                    header={translate('DRAWER_HOME')} />
                <ScrollView>
                    <View style={{
                        flex: 1,
                        width: '100%',
                        paddingHorizontal: DIMENS.px_10,
                        paddingBottom: DIMENS.px_10
                    }}>
                        {/* Search */}
                        <CardView
                            cardElevation={5}
                            cardMaxElevation={5}
                            cornerRadius={5}>

                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: colors.color_primary,
                                borderRadius: DIMENS.px_3
                            }}>
                                <View style={{
                                    width: '15%',
                                    alignItems: 'center',
                                }}>
                                    <IconX
                                        origin={ICON_TYPE.ICONICONS}
                                        name='search-outline'
                                        color={colors.grey400}
                                        size={28}
                                    />
                                </View>
                                <TextInput
                                    placeholder={translate('PLACEHOLDER_LIVE_EVENT_LATEST_NEWS')}
                                    placeholderTextColor={colors.grey500}
                                    keyboardType={'default'}
                                    ref={(refs) => this.searchEventsNewsRef = refs}
                                    onChangeText={(txt) => {
                                        this.setState({ searchTxtField: txt })
                                    }}
                                    returnKeyType="done"
                                    value={this.state.searchTxtField}
                                    style={{
                                        width: '90%',
                                        minHeight: DIMENS.px_45,
                                        maxHeight: DIMENS.px_50,
                                        color: colors.white,
                                        backgroundColor: colors.transparent,
                                    }}
                                    autoCapitalize={'none'}
                                />
                            </View>
                        </CardView>
                        {/* View pager videos */}
                        {this.state.topViewPagerArray.length != 0 &&
                            <View style={{
                                display: 'flex',
                                marginTop: DIMENS.px_15
                            }}>
                                <ViewPager
                                    ref={this.viewPagerRef}
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_150,
                                    }} initialPage={0}
                                    onPageSelected={this.onPageSelected}
                                    showPageIndicator

                                //showPageIndicator
                                >
                                    {this.state.topViewPagerArray.map((item) => (
                                        <Ripple
                                            style={{
                                                width: '100%',
                                                height: DIMENS.px_150,
                                                borderRadius: DIMENS.px_20,
                                            }}>
                                            <View style={{
                                                width: '100%',
                                                height: DIMENS.px_150,
                                            }}>
                                                <Image
                                                    style={{
                                                        width: '100%',
                                                        height: DIMENS.px_150,
                                                    }}
                                                    source={IC_DUMMY_PAGER}
                                                    resizeMode={'cover'}
                                                />
                                                <Image
                                                    style={{
                                                        width: DIMENS.px_60,
                                                        height: DIMENS.px_60,
                                                        position: 'absolute',
                                                        alignSelf: 'center',
                                                        marginTop: DIMENS.px_100 / 2
                                                    }}
                                                    resizeMode={'contain'}
                                                    source={IC_PLAYER_ICON}
                                                />
                                            </View>
                                        </Ripple>
                                    ))}
                                </ViewPager>
                            </View>
                        }
                        {/* Subscription button */}
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'column',
                                marginTop: DIMENS.px_15
                            }}
                        >
                            {/* STL_COURSES */}
                            <Ripple style={{
                                width: '100%',
                                backgroundColor: colors.color_button_blue,
                                borderRadius: DIMENS.px_3,
                            }}
                                disabled={false}
                                onPress={() => {
                                    NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_SELECTION, params: { param: {} }, });
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('STL_COURSES')}
                                    </Text>
                                }
                            </Ripple>

                            {/* STL_PREMIUM_CLUB */}
                            <Ripple style={{
                                width: '100%',
                                backgroundColor: colors.color_button_blue,
                                borderRadius: DIMENS.px_3,
                                marginTop: DIMENS.px_10
                            }}
                                disabled={false}
                                onPress={() => {
                                    NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_PREMIUM_CLUB, params: { param: {} }, });
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('STL_PREMIUM_CLUB')}
                                    </Text>
                                }
                            </Ripple>

                            {/* STL_FREE_MARKET_VIEW */}
                            <Ripple style={{
                                width: '100%',
                                backgroundColor: colors.color_button_blue,
                                borderRadius: DIMENS.px_3,
                                marginTop: DIMENS.px_10
                            }}
                                disabled={false}
                                onPress={() => {
                                    NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_FREE_MARKET_SUG, params: { param: {} }, });
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('STL_FREE_MARKET_VIEW')}
                                    </Text>
                                }
                            </Ripple>
                        </View>

                        {/* Line */}
                        <View
                            style={{
                                width: '100%',
                                height: DIMENS.px_05,
                                backgroundColor: colors.grey400,
                                marginTop: DIMENS.px_20
                            }}
                        />
                        {/* Active plan detail page */}
                        {/* View pager videos */}
                        {this.state.topViewPagerArray.length != 0 &&
                            <View style={{
                                display: 'flex',
                                marginTop: DIMENS.px_15,
                            }}>
                                <ViewPager
                                    ref={this.viewPagerRef}
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_130,
                                    }} initialPage={0}
                                    onPageSelected={this.onPageSelected}
                                    showPageIndicator

                                //showPageIndicator
                                >
                                    {this.state.topViewPagerArray.map((item) => (
                                        <ImageBackground
                                            style={{
                                                flexDirection: 'column',
                                                width: '100%',
                                            }}
                                            source={IC_PLAN_BACKGROUND}
                                        >
                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Medium,
                                                fontSize: DIMENS.txt_size_large,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('ACTIVE_PLAN')}
                                            </Text>

                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Regular,
                                                fontSize: DIMENS.txt_size_medium_1,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {'Expires on 01 Oct 2020'}
                                            </Text>

                                            <Text style={{
                                                color: colors.color_button_blue,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10,
                                                textDecorationLine: 'underline',
                                            }}
                                            >
                                                {translate('VIEW_DETAILS')}
                                            </Text>
                                        </ImageBackground>
                                    ))}
                                </ViewPager>
                            </View>
                        }

                        {/* Club membership */}
                        <View
                            style={{
                                flexDirection: 'column',
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>
                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_medium_14,
                            }}
                            >
                                {translate('CLUB_MEMBERSHIP')}
                            </Text>
                            {/* Membership buttons */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-around',
                                    marginTop: DIMENS.px_15
                                }}>
                                {/* Silver */}
                                <Ripple
                                    style={{
                                        width: '31%',
                                        height:DIMENS.px_130,
                                        backgroundColor: colors.color_bg_purple,
                                        borderRadius: DIMENS.px_5,
                                        justifyContent:'center'
                                    }}
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_TCONDITION, params: { param: { screen_name: translate('SCREEN_STL_PREMIUM_CLUB') } }, });
                                    }}>
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10
                                    }}>
                                        {translate('AUDIOS')}
                                    </Text>

                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                        fontSize: DIMENS.txt_size_medium_1,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10
                                    }}>
                                        {translate('PLAN')}
                                    </Text>

                                    {/* <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_large,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10,
                                    }}
                                    >
                                        {translate('PER_MONTH')}
                                    </Text> */}
                                </Ripple>

                                {/* Golden */}
                                <Ripple
                                    style={{
                                        width: '31%',
                                        height:DIMENS.px_130,
                                        backgroundColor: colors.color_bg_dark_green,
                                        borderRadius: DIMENS.px_5,
                                        justifyContent:'center'
                                    }}
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_TCONDITION, params: { param: { screen_name: translate('SCREEN_STL_PREMIUM_CLUB') } }, });
                                    }}>
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10
                                    }}>
                                        {translate('VIDEOS')}
                                    </Text>

                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                        fontSize: DIMENS.txt_size_medium_1,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10
                                    }}>
                                     {translate('PLAN')}
                                    </Text>

                                    {/* <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_large,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10,
                                    }}
                                    >
                                        {translate('PER_MONTH')}
                                    </Text> */}
                                </Ripple>

                                {/* Platinum */}
                                <Ripple style={{
                                    width: '31%',
                                    height:DIMENS.px_130,
                                    backgroundColor: colors.color_bg_green,
                                    borderRadius: DIMENS.px_5,
                                    justifyContent:'center'
                                }}
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_TCONDITION, params: { param: { screen_name: translate('SCREEN_STL_PREMIUM_CLUB') } }, });
                                    }}>
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10
                                    }}>
                                        {translate('SUGGESTIONS')}
                                    </Text>

                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                        fontSize: DIMENS.txt_size_medium_1,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10
                                    }}>
                                        {translate('PLAN')}
                                    </Text>

                                    {/* <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_large,
                                        textAlign: 'center',
                                        padding: DIMENS.px_10,
                                    }}
                                    >
                                        {translate('PER_MONTH')}
                                    </Text> */}
                                </Ripple>
                            </View>
                        </View>
                        {/* STL_FREE_MARKET_VIEW */}
                        <Ripple style={{
                            width: '100%',
                            backgroundColor: colors.blue800,
                            borderRadius: DIMENS.px_3,
                            marginTop: DIMENS.px_20
                        }}
                            disabled={false}
                            onPress={() => {
                                NavigationService.navigate({ routeName: SCREEN.SCREEN_DEMATE_LINK_LIST, params: { param: {} }, });
                            }}>
                            {
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: DIMENS.txt_size_medium_14,
                                    padding: DIMENS.px_10,
                                    textAlign: 'center'
                                }}>
                                    {translate('CLICK_HERE_TO_OPEN_DEMAT_ACCOUNT')}
                                </Text>
                            }
                        </Ripple>
                        {/* STL live event */}
                        <View
                            style={{
                                width: '100%',
                                marginTop: DIMENS.px_10
                            }}>
                            {/* stl and book now */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_10,
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_medium_14,
                                    textAlign: 'center',
                                }}
                                >
                                    {translate('STL_LIVE_EVENT')}
                                </Text>

                                {/* STL_FREE_MARKET_VIEW */}
                                <Ripple style={{
                                    backgroundColor: colors.color_button_blue,
                                    borderRadius: DIMENS.px_3,
                                }}
                                    disabled={false}
                                    onPress={() => {
                                    }}>
                                    {
                                        <Text style={{
                                            color: colors.white,
                                            fontFamily: FONT_FAMILIY.Font_Regular,
                                            fontSize: DIMENS.txt_size_medium_14,
                                            paddingHorizontal: DIMENS.px_10,
                                            paddingVertical: DIMENS.px_5,
                                            textAlign: 'center'
                                        }}>
                                            {translate('BOOK_NOW')}
                                        </Text>
                                    }
                                </Ripple>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_15
                                }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    scrollEnabled={true}
                                    data={this.state.latestNewsArray}
                                    renderItem={({ item, index }) => this.renderLatestNewsHoriItem(item, index)}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>



                        {/* Latest news */}
                        <View
                            style={{
                                flexDirection: 'column',
                                width: '100%',
                                marginTop: DIMENS.px_15
                            }}>
                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_medium_14,
                            }}
                            >
                                {translate('LATEST_NEWS')}
                            </Text>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_15
                                }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    scrollEnabled={true}
                                    data={this.state.latestNewsArray}
                                    renderItem={({ item, index }) => this.renderLatestNewsHoriItem(item, index)}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>

                        {/* trending */}
                        <View
                            style={{
                                flexDirection: 'column',
                                width: '100%',
                                marginTop: DIMENS.px_15,
                            }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_medium_14,
                                }}
                                >
                                    {translate('TRENDING')}
                                </Text>

                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_medium_14,
                                }}
                                >
                                    {translate('VIEW_ALL')}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_15
                                }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    scrollEnabled={true}
                                    data={this.state.tredingArray}
                                    renderItem={({ item, index }) => this.renderTrendingHoriItem(item, index)}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>

                        {/* populer events */}
                        <View
                            style={{
                                flexDirection: 'column',
                                width: '100%',
                                marginTop: DIMENS.px_15,
                            }}>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_medium_14,
                                }}
                                >
                                    {translate('POPULAR_EVENTS')}
                                </Text>

                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_medium_14,
                                }}
                                >
                                    {translate('VIEW_ALL')}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_15
                                }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    scrollEnabled={true}
                                    data={this.state.tredingArray}
                                    renderItem={({ item, index }) => this.renderTrendingHoriItem(item, index)}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>


                {loading ?
                    <Loader /> : null}
            </View>
        )
    }

    renderLatestNewsHoriItem = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple
                style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    height: DIMENS.px_110,
                    width: DIMENS.px_150,
                    marginRight: DIMENS.px_10
                }}>
                <Image
                    style={{
                        flex: 1,
                        height: DIMENS.px_110,
                        width: DIMENS.px_150,
                    }}
                    source={IC_DUMMY_PAGER}
                    resizeMode={'cover'}
                />
                <Text
                    style={{
                        marginTop: DIMENS.px_70 / 2,
                        position: 'absolute',
                        alignSelf: 'center',
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        fontSize: DIMENS.txt_size_medium_14,
                        color: colors.white
                    }}>{'Coronaviru: Hard-Hit Brazil removes data amid rising death all'}</Text>

            </Ripple>
        )
    }

    renderTrendingHoriItem = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple
                style={{
                    display: 'flex',
                    backgroundColor: 'white',
                    height: DIMENS.px_120,
                    width: DIMENS.px_100,
                    marginRight: DIMENS.px_10
                }}>
                <Image
                    style={{
                        flex: 1,
                        height: DIMENS.px_120,
                        width: DIMENS.px_100,
                    }}
                    source={IC_DUMMY_PAGER}
                    resizeMode={'cover'}
                />
            </Ripple>
        )
    }
}