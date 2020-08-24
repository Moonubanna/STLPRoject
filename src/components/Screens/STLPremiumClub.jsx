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
import { AVTAR } from '../../images'
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

export default class STLPremiumClub extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        console.log('componentDidMount of STLPremiumClub screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of STLPremiumClub screen')
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
                    header={translate('STL_PREMIUM_CLUB')} />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: DIMENS.px_15,
                        paddingBottom: DIMENS.px_10
                    }}>
                        {/* Course language selection */}
                        <CardView
                            cardElevation={5}
                            cardMaxElevation={5}
                            cornerRadius={5} style={{
                                width: '100%',
                                padding: DIMENS.px_10,
                                backgroundColor: colors.color_primary,
                                borderRadius: DIMENS.px_3
                            }}>

                            <View
                                style={{
                                    width: '100%',
                                }}>
                                {/* <Text style={{
                                    marginTop: DIMENS.px_15,
                                    color: colors.grey400,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_large_extra,
                                    textAlign: 'center'
                                }}
                                >
                                    {translate('SELECT_PLAN')}
                                </Text> */}

                                {/* Membership buttons */}
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        width: '100%',
                                        marginTop: DIMENS.px_15,
                                        marginBottom: DIMENS.px_30
                                    }}>
                                    {/* Silver */}
                                    <CardView
                                        cardElevation={5}
                                        cardMaxElevation={5}
                                        cornerRadius={5}
                                        style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            backgroundColor: colors.color_bg_purple,
                                            borderRadius: DIMENS.px_5,
                                            padding: DIMENS.px_20
                                        }}>
                                        <Ripple style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            justifyContent:'center'
                                        }}>
                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large_extra,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('AUDIOS')}
                                            </Text>

                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large_extra,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('PLAN')}
                                            </Text>
                                        </Ripple>
                                    </CardView>

                                    {/* Golden */}
                                    <CardView
                                        cardElevation={5}
                                        cardMaxElevation={5}
                                        cornerRadius={5}
                                        style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            backgroundColor: colors.color_bg_dark_green,
                                            borderRadius: DIMENS.px_5,
                                            padding: DIMENS.px_20,
                                            marginTop: DIMENS.px_15
                                        }}>
                                        <Ripple style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            justifyContent:'center'
                                        }}>
                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large_extra,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('VIDEOS')}
                                            </Text>

                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large_extra,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('PLAN')}
                                            </Text>
                                        </Ripple>
                                    </CardView>

                                    {/* Platinum */}
                                    <CardView
                                        cardElevation={5}
                                        cardMaxElevation={5}
                                        cornerRadius={5}
                                        style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            backgroundColor: colors.color_bg_green,
                                            borderRadius: DIMENS.px_5,
                                            padding: DIMENS.px_20,
                                            marginTop: DIMENS.px_15
                                        }}>
                                        <Ripple style={{
                                            flexDirection: 'row',
                                            width: '100%',
                                            justifyContent:'center'
                                        }}>
                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large_extra,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('SUGGESTIONS')}
                                            </Text>

                                            <Text style={{
                                                color: colors.white,
                                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                                fontSize: DIMENS.txt_size_large_extra,
                                                textAlign: 'center',
                                                padding: DIMENS.px_10
                                            }}>
                                                {translate('PLAN')}
                                            </Text>
                                        </Ripple>
                                    </CardView>
                                </View>
                            </View>
                        </CardView>

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
                                    NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_TCONDITION, params: { param: { screen_name: translate('SCREEN_STL_PREMIUM_CLUB') } }, });
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_large,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('SUBSCRIBE_PLAN')}
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