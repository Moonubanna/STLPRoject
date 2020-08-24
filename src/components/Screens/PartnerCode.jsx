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

export default class PartnerCode extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            //previousScreenName: this.props.navigation.state.params.param.screen_name
        }
    }
    componentDidMount() {
        console.log('componentDidMount of PartnerCode screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of PartnerCode screen')
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
                    header={translate('HEADER_REFFER_CODE')} />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        paddingBottom: DIMENS.px_10
                    }}>
                        <View
                            style={{
                                width: '100%',
                                height: DIMENS.px_150,
                                borderRadius: DIMENS.px_20,
                            }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: DIMENS.px_150,
                                }}
                                source={IC_DUMMY_PAGER}
                                resizeMode={'cover'}
                            />
                            <Ripple style={{
                                paddingHorizontal: DIMENS.px_10,
                                paddingVertical: DIMENS.px_7,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                margin: DIMENS.px_5,
                                backgroundColor: colors.color_button_blue,
                                borderRadius: DIMENS.px_3,
                                zIndex:1
                            }}
                            onPress={()=>{
                                NavigationService.navigate({ routeName: SCREEN.SCREEN_MY_EARNING, params: { param: {} }, });
                            }}>
                                <Text style={{
                                    color: colors.grey400,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_medium_1,
                                }}
                                    numberOfLines={5}>
                                    {translate('MY_EARNINGS')}
                                </Text>
                            </Ripple>
                            <View
                                style={{
                                    width: '100%',
                                    paddingVertical: DIMENS.px_10,
                                    position: 'absolute',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: DIMENS.px_100 / 2
                                }}>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_large,
                                }}
                                    numberOfLines={2}>
                                    {translate('INTIVE_FRIEND_EARN_MONEY')}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            marginHorizontal: DIMENS.px_30,
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                marginTop: DIMENS.px_10,
                                color: colors.grey400,
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_large,
                                textAlign: 'center'
                            }}
                            >
                                {translate('SHARE_REF_SMS_EMAL_ETC')}
                            </Text>


                            <Text style={{
                                marginTop: DIMENS.px_50,
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_large_extra,
                                textAlign: 'center'
                            }}
                            >
                                {translate('YOUR_PARTNER_CODE')}
                            </Text>

                            <Ripple style={{
                                marginTop:DIMENS.px_10,
                                width:DIMENS.px_150,
                                paddingVertical: DIMENS.px_10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf:'center',
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
                            {/* english button */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_35,
                                    backgroundColor: colors.color_button_blue,
                                    borderRadius: DIMENS.px_3,
                                }}>
                                <Ripple style={{
                                    width: '100%',
                                }}
                                    disabled={false}
                                    onPress={() => {

                                    }}>
                                    {
                                        <Text style={{
                                            color: colors.white,
                                            fontFamily: FONT_FAMILIY.Font_Regular,
                                            fontSize: DIMENS.txt_size_large,
                                            padding: DIMENS.px_10,
                                            textAlign: 'center'
                                        }}>
                                            {translate('REFER_NOW')}
                                        </Text>
                                    }
                                </Ripple>
                            </CardView>

                            <Text style={{
                                marginTop: DIMENS.px_10,
                                color: colors.grey400,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_medium_14,
                                textAlign: 'center'
                            }}
                            >
                                {translate('T_C')}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}