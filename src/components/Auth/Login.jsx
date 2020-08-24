import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text, Image,
  TouchableOpacity,
  View, Dimensions,
  TextInput,
  ImageBackground
} from 'react-native'
import { Form, Field } from 'react-final-form'
import Ripple from 'react-native-material-ripple';


import FormTextInput from '../FormTextInput'
import HeaderButton from '../HeaderButton'
import { showError } from '../../NotificationService'
import styles from './styles'
import { colors } from '../../theme'
import { LOGO, IC_GOOGLE, IC_FACEBOOK } from '../../images'
import translate from '../../i18n/i18n';
import {
  APP_PARAMS, FONT_FAMILIY, DIMENS, emailRegex, KEY, passRegex, SCREEN, WIDTH
} from '../../constants'
import CommonHeader from '../../common/CommonHeader'
import NavigationService from '../../NavigationService'
import { showInfoToast, showErrorToast,showToast } from '../../utility/Toast'
import { showMessage } from 'react-native-flash-message'
import * as Utils from '../../utility/Utils'
import Loader from '../../common/Loader'
import { storeData, retrieveData } from '../../common/AsyncStorage'
import CommonAddressView from '../../common/CommonAddressView';

//Library
import Orientation from 'react-native-orientation';
import CardView from 'react-native-cardview'
import * as Animatable from 'react-native-animatable';

//Icons
import { IconX, ICON_TYPE } from '../../utility/Icons';

export default class Login extends React.PureComponent {


  constructor(props) {
    super(props)
    this.passRef = undefined;
    this.state = {
      emailTxtField: '',
      passTxtField: '',
      isPasswordVisible: false,
      isSelectRememberMe: false
    }
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillUnmount() {

  }

  //call login user api
  callLoginUserApi = () => {
    if (Utils.isValidEmail(this.state.emailTxtField, true) &&
      Utils.isValidPassword(this.state.passTxtField, true)) {
      let requestData = {
        email_address: this.state.emailTxtField,
        password:this.state.passTxtField,
        device_token: 'abcd'
      }
      this.props.requestLoginUserApi(requestData).then(result => {
        this.responseLoginUserApi(result)
      })
    }
  }

  responseLoginUserApi = (response) => {
    console.warn('LOGINRESPONSE', response)
    if (response != undefined) {
      if (response.success === KEY.SUCCESS_) {
        //showToast(response.message)
        if (response.data != undefined && response.data != null) {
          showToast(response.message)
          global[KEY.USER_DATA] = response.data;
          storeData(KEY.USER_DATA,response.data)
          NavigationService.navigate({ routeName: 'Drawer', params: { param: {} }, });
        } else {

          showErrorToast(response.message)
        }
      } else if (response.success == KEY.FAILED_) {

        showErrorToast(response.message)
      }
    }
  }
  render() {
    const { loading } = this.props
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: colors.color_primary_dark

        }}>
        <ScrollView>
          <View style={{
            flex: 1,
            width: WIDTH,
            alignItems: 'center'
          }}>
            <Image
              style={{
                marginTop: DIMENS.px_50,
                width: DIMENS.px_200,
                height: DIMENS.px_150,
              }}
              resizeMode={'contain'}
              source={LOGO}
            />

            <View style={{
              flex: 1,
              flexDirection: 'column',
              width: '100%',
              padding: DIMENS.px_15,
              marginTop: DIMENS.px_40
            }}>
              {/* mobile or email */}
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={{
                  width: '100%',
                  borderRadius: DIMENS.px_3,
                  backgroundColor: colors.color_primary,
                }}>
                <View style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <TextInput
                    placeholder={translate('PLACEHOLDER_EMAIL_OR_PHONE')}
                    placeholderTextColor={colors.grey500}
                    keyboardType={'email-address'}
                    onChangeText={(txt) => {
                      this.setState({ emailTxtField: txt })
                    }}
                    onSubmitEditing={() => this.passRef.focus()}
                    returnKeyType="next"
                    value={this.state.emailTxtField}
                    style={{
                      width: '100%',
                      minHeight: DIMENS.px_45,
                      maxHeight: DIMENS.px_50,
                      color: colors.white,
                      backgroundColor: colors.transparent,
                      marginLeft: DIMENS.px_10,
                    }}
                    autoCapitalize={'none'}
                  />
                </View>
              </CardView>
              {/* Password */}
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={{
                  width: '100%',
                  marginTop: DIMENS.px_20,
                  borderRadius: DIMENS.px_3,
                  backgroundColor: colors.color_primary,
                }}>
                <View style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <TextInput
                    secureTextEntry={this.state.isPasswordVisible ? false : true}
                    placeholder={translate('PLACEHOLDER_PASSWRD')}
                    placeholderTextColor={colors.grey500}
                    keyboardType={'default'}
                    ref={(refs) => this.passRef = refs}
                    onChangeText={(txt) => {
                      this.setState({ passTxtField: txt })
                    }}
                    returnKeyType="done"
                    value={this.state.passTxtField}
                    style={{
                      width: '85%',
                      minHeight: DIMENS.px_45,
                      maxHeight: DIMENS.px_50,
                      color: colors.white,
                      backgroundColor: colors.transparent,
                      marginLeft: DIMENS.px_10
                    }}
                  />
                  <View style={{
                    width: '15%',
                    alignItems: 'center',
                    paddingRight: DIMENS.px_10
                  }}>
                    {this.state.isPasswordVisible ?
                    <Ripple
                    onPress={()=>{
                      this.setState({
                        isPasswordVisible:!this.state.isPasswordVisible
                      })
                    }}>
                      <IconX
                        origin={ICON_TYPE.ENTYPO}
                        name='eye'
                        color={colors.grey400}
                        size={22}
                      />
                      </Ripple>
                      :
                      <Ripple
                    onPress={()=>{
                      this.setState({
                        isPasswordVisible:!this.state.isPasswordVisible
                      })
                    }}>
                      <IconX
                        origin={ICON_TYPE.ENTYPO}
                        name='eye-with-line'
                        color={colors.grey400}
                        size={22}
                      />
                      </Ripple>
                    }
                  </View>
                </View>
              </CardView>

              {/* Forgot password text */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: DIMENS.px_20,
                  width: '100%',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                {/* Remember me */}
                <Ripple
                  onPress={() => {
                    alert('click forgot')
                  }}>
                  <Text style={{
                    color: colors.grey400,
                    fontSize: DIMENS.txt_size_medium_14,
                    fontFamily: FONT_FAMILIY.Font_Light,
                    textAlign: 'right'
                  }}>
                    {translate('FORGOT_PASS')}</Text>
                </Ripple>
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
                  this.callLoginUserApi()
                  //NavigationService.navigate({ routeName: SCREEN.OTP_VERIFICATION, params: { param: {} }, });
                }}>
                {
                  <Text style={{
                    color: colors.white,
                    fontFamily: FONT_FAMILIY.Font_Regular,
                    fontSize: DIMENS.txt_size_large_extra,
                    padding: DIMENS.px_10,
                    textAlign: 'center'
                  }}>
                    {translate('LOGIN')}
                  </Text>
                }
              </Ripple>
              {/* connect text */}
              <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: DIMENS.px_25
              }}>
                <View
                  style={{
                    width: '33.3%',
                    height: DIMENS.px_05,
                    backgroundColor: colors.grey400
                  }}
                />
                <Text style={{
                  width: '33.3%',
                  color: colors.white,
                  fontFamily: FONT_FAMILIY.Font_Regular,
                  fontSize: DIMENS.txt_size_small_12,
                  textAlign: 'center'
                }}>
                  {translate('OR_CONNECT_WITH')}
                </Text>
                <View
                  style={{
                    width: '33.3%',
                    height: DIMENS.px_05,
                    backgroundColor: colors.grey400
                  }}
                />
              </View>
              {/* Social icons */}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: DIMENS.px_25
                }}>
                <Image
                  style={{
                    width: DIMENS.px_50,
                    height: DIMENS.px_50,
                  }}
                  resizeMode={'contain'}
                  source={IC_GOOGLE}
                />
                <Image
                  style={{
                    width: DIMENS.px_50,
                    height: DIMENS.px_50,
                  }}
                  resizeMode={'contain'}
                  source={IC_FACEBOOK}
                />
              </View>

              {/* Dont have accont */}
              <View style={{
                flexDirection: 'row',
                marginTop: DIMENS.px_20,
                width: '100%',
                justifyContent: 'center'
              }}>
                <Text style={{
                  color: colors.grey400,
                  fontSize: DIMENS.txt_size_medium_14,
                  fontFamily: FONT_FAMILIY.Font_Regular
                }}>
                  {translate('NEW_USER')}</Text>
                <Ripple
                  onPress={() => {
                    NavigationService.navigate({ routeName: SCREEN.SIGNUP })
                  }}>
                  <Text style={{
                    marginLeft: DIMENS.px_5,
                    color: colors.red500,
                    fontSize: DIMENS.txt_size_medium_14,
                    fontFamily: FONT_FAMILIY.Font_Bold,
                    textDecorationLine: 'underline',
                  }}>
                    {translate('SIGN_UP')}</Text>
                </Ripple>
              </View>
            </View>

          </View>
        </ScrollView>
        {loading ?
          <Loader /> : null}
      </View>
    )
  }

}
