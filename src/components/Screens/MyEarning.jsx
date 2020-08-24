import React from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text, Image,
    TouchableOpacity, FlatList,
    View, Dimensions, TextInput, DeviceEventEmitter
} from 'react-native'
import styles from '../Auth/styles'
import { colors } from '../../theme';
import { IC_DUMMY_PAGER, IC_PLAYER_ICON } from '../../images'
import CommonHeaderHome from '../../common/CommonHeaderHome'
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
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
import MarqueeText from 'react-native-marquee';
import { IconX, ICON_TYPE } from '../../utility/Icons';

const { height, width } = Dimensions.get('screen')
import StarRating from 'react-native-star-rating';

export default class MyEarning extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            //previousScreenName: this.props.navigation.state.params.param.screen_name
        }
    }
    componentDidMount() {
        console.log('componentDidMount of MyEarning screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of MyEarning screen')
    }
    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }
    render() {
        const { data, loading } = this.props

        return (
            <View style={{
                backgroundColor: colors.color_primary_dark,
                flex: 1, width: '100%',
            }}>
                <CommonHeaderHome
                    backPress={() => this.onBackPress()}
                    isBack={true}
                    size={12}
                    isRightIcon={false}
                    isRightNoti={true}
                    header={translate('HEADER_MY_EARNINGS')} />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: DIMENS.px_15,
                        paddingBottom: DIMENS.px_10
                    }}>
                        {/* Share my earning view */}
                        <View style={{
                            width: '100%',
                            flexDirection: 'column',
                            padding: DIMENS.px_15,
                            backgroundColor: colors.color_primary
                        }}>
                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_large_extra_20,
                                textAlign: 'center'
                            }}
                            >
                                {translate('MY_EARNINGS')}
                            </Text>

                            <Text style={{
                                marginTop: DIMENS.px_25,
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_large_extra,
                                textAlign: 'center'
                            }}
                            >
                                {translate('YOUR_PARTNER_CODE')}
                            </Text>

                            <Ripple style={{
                                marginTop: DIMENS.px_10,
                                width: DIMENS.px_150,
                                paddingVertical: DIMENS.px_10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                backgroundColor: colors.white,
                                borderRadius: DIMENS.px_3
                            }}>
                                <Text style={{
                                    color: colors.black,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_large_extra,
                                }}
                                    numberOfLines={5}>
                                    {'ABCDEF'}
                                </Text>
                            </Ripple>

                            <Text style={{
                                marginTop: DIMENS.px_25,
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_large_extra,
                                textAlign: 'center'
                            }}
                            >
                                {translate('TAP_TO_COPY')}
                            </Text>
                        </View>

                        <Text style={{
                            color: colors.color_button_blue,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            fontSize: DIMENS.txt_size_medium_1,
                            marginTop: DIMENS.px_15,
                            textAlign: 'center'
                        }}
                            numberOfLines={5}>
                            {translate('GET_RUPEES_CONVERTED')}
                        </Text>

                        {/* Total links shared */}
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                paddingVertical: DIMENS.px_15,
                                justifyContent: 'space-between',
                                marginTop: DIMENS.px_15
                            }}>
                            <Text style={{
                                color: colors.grey400,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_medium_1,
                            }}
                                numberOfLines={5}>
                                {translate('TOTAL_LINKS_YOU_SHARED')}
                            </Text>
                            <View
                                style={{
                                    width: DIMENS.px_80,
                                    paddingVertical: DIMENS.px_7,
                                    borderRadius: DIMENS.px_3,
                                    borderWidth: DIMENS.px_05,
                                    borderColor: colors.grey400,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{
                                    color: colors.grey400,
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: DIMENS.txt_size_medium_1,
                                }}
                                    numberOfLines={5}>
                                    {'15'}
                                </Text>
                            </View>
                        </View>

                        {/* Line */}
                        <View style={{
                            width: '100%',
                            height: DIMENS.px_05,
                            backgroundColor: colors.grey400
                        }} />

                        {/* Total converted links */}
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                paddingVertical: DIMENS.px_15,
                                justifyContent: 'space-between',
                                marginTop: DIMENS.px_15
                            }}>
                            <Text style={{
                                color: colors.grey400,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_medium_1,
                            }}
                                numberOfLines={5}>
                                {translate('TOTAL_CONVERTED_LINKS')}
                            </Text>
                            <View
                                style={{
                                    width: DIMENS.px_80,
                                    paddingVertical: DIMENS.px_7,
                                    borderRadius: DIMENS.px_3,
                                    borderWidth: DIMENS.px_05,
                                    borderColor: colors.grey400,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{
                                    color: colors.grey400,
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: DIMENS.txt_size_medium_1,
                                }}
                                    numberOfLines={5}>
                                    {'13'}
                                </Text>
                            </View>
                        </View>

                        {/* Line */}
                        <View style={{
                            width: '100%',
                            height: DIMENS.px_05,
                            backgroundColor: colors.grey400
                        }} />

                        {/* Total earnings */}
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                paddingVertical: DIMENS.px_15,
                                justifyContent: 'space-between',
                                marginTop: DIMENS.px_15
                            }}>
                            <Text style={{
                                color: colors.grey400,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_medium_1,
                            }}
                                numberOfLines={5}>
                                {translate('TOTAL_EARNINGS')}
                            </Text>
                            <View
                                style={{
                                    width: DIMENS.px_80,
                                    paddingVertical: DIMENS.px_7,
                                    borderRadius: DIMENS.px_3,
                                    borderWidth: DIMENS.px_05,
                                    borderColor: colors.grey400,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{
                                    color: colors.grey400,
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: DIMENS.txt_size_medium_1,
                                }}
                                    numberOfLines={5}>
                                    {'Rs.***'}
                                </Text>
                            </View>
                        </View>

                        {/* Line */}
                        <View style={{
                            width: '100%',
                            height: DIMENS.px_05,
                            backgroundColor: colors.grey400
                        }} />

                        {/* english button */}
                        <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '90%',
                                    marginTop: DIMENS.px_35,
                                    backgroundColor: colors.color_button_blue,
                                    borderRadius: DIMENS.px_3,
                                    alignSelf:'center'
                                }}>
                                <Ripple style={{
                                    width: '90%',
                                    alignSelf:'center'
                                }}
                                    disabled={false}
                                    onPress={() => {

                                    }}>
                                    {
                                        <Text style={{
                                            color: colors.white,
                                            fontFamily: FONT_FAMILIY.Font_Regular,
                                            fontSize: DIMENS.txt_size_medium_14,
                                            padding: DIMENS.px_10,
                                            textAlign: 'center'
                                        }}>
                                            {translate('SHARED_CODE_EARN_MONEY')}
                                        </Text>
                                    }
                                </Ripple>
                            </CardView>
                    </View>
                </ScrollView>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}