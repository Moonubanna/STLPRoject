import React from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text, Image,
    TouchableOpacity, FlatList,
    View, Dimensions, TextInput, DeviceEventEmitter, ImageBackground
} from 'react-native'
import Ripple from 'react-native-material-ripple';
import styles from '../Auth/styles'
import { colors } from '../../theme';
import { LOGO, BACKGROUND_SCREEN } from '../../images'
import translate from '../../i18n/i18n';
import * as Toast from '../../utility/Toast'
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import { storeData, retrieveData, clearData } from '../../common/AsyncStorage'
import { showInfoToast, showErrorToast, showToast } from '../../utility/Toast'
import CommonButton from '../../common/CommonButton';
import Loader from '../../common/Loader'
import Modal from 'react-native-modal'
import NavigationService from '../../NavigationService';
import { element } from 'prop-types';
import CodeInput from 'react-native-confirmation-code-input';

const { width, height } = Dimensions.get('window')

export default class OTPVerification extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            mobileNumber: undefined,
            verificationCode: undefined
        }
    }
    componentDidMount() {
        console.log('componentDidMount of OTPVerification')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of OTPVerification')
    }
    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }
    render() {
        const { data, loading } = this.props
        return (
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: colors.color_primary_dark
                }}>
                <View
                    style={{
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'center',
                        paddingHorizontal: DIMENS.px_15,
                    }}>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'column',
                            marginTop: DIMENS.px_20
                        }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontSize: DIMENS.txt_size_large_extra_20,
                                color: colors.white
                            }}>{translate('HEADER_VERIFIATION')}</Text>

                        <Text
                            style={{
                                marginTop: DIMENS.px_25,
                                textAlign: 'center',
                                fontFamily: FONT_FAMILIY.Font_Regular,
                                fontSize: DIMENS.txt_size_medium_1,
                                color: colors.grey400
                            }}>{translate('TYPE_VERIFICATION_CODE')}</Text>
                        {/* Verification Code */}
                        <View
                            style={{
                                width: '100%',
                                marginTop: DIMENS.px_20
                            }}>
                            {this.renderOtpInputDesign()}
                        </View>

                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                marginTop: DIMENS.px_80,
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    textAlign: 'center',
                                    fontSize: DIMENS.txt_size_medium_14,
                                    color: colors.grey400
                                }}>{translate('DID_NOT_VERI_CODE')}</Text>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={() => {
                                }}
                                style={{
                                    marginLeft: DIMENS.px_3
                                }}>
                                <Text
                                    style={{
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        textAlign: 'center',
                                        fontSize: DIMENS.txt_size_medium_1,
                                        color: colors.red500,
                                        textDecorationLine: 'underline',
                                    }}>{' ' + translate('RESEND_OTP')}</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Login button */}
                        <Ripple style={{
                            width: '100%',
                            marginTop: DIMENS.px_40,
                            backgroundColor: colors.color_button_blue,
                            borderRadius: DIMENS.px_3,
                        }}
                            disabled={false}
                            onPress={() => {
                                NavigationService.navigate({ routeName: 'Drawer', params: { param: {} }, });
                            }}>
                            {
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Regular,
                                    fontSize: DIMENS.txt_size_large_extra,
                                    padding: DIMENS.px_10,
                                    textAlign: 'center'
                                }}>
                                    {translate('DONE')}
                                </Text>
                            }
                        </Ripple>
                    </View>
                </View>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }

    renderOtpInputDesign = () => {
        return (
            <View style={{
                width: '100%'
            }}>
                <CodeInput
                    ref="codeInputRef2"
                    keyboardType="numeric"
                    codeLength={4}
                    className='border-box'
                    autoFocus={false}
                    activeColor={colors.white}
                    fontSize={DIMENS.txt_size_medium_1}
                    //fontFamily= {Strings.font_regular}
                    codeInputStyle={{
                        //borderBottomWidth: 1, 
                        //borderBottomColor: colors.color_primary, 
                        backgroundColor: colors.color_primary
                    }}
                    onFulfill={(code) => {
                        this.setState({
                            verificationCode: code
                        }, () => {
                            if (code.length == 4) {
                                
                            }
                        })
                    }}
                />
            </View>
        )
    }
}