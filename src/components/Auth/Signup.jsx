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
    ImageBackground,
    FlatList
} from 'react-native'
import { Form, Field } from 'react-final-form'
import FormTextInput from '../FormTextInput'
import HeaderButton from '../HeaderButton'
import { showError } from '../../NotificationService'
import styles from './styles'
import { colors } from '../../theme'
import { LOGO, AVTAR, IC_CAMERA } from '../../images'
import translate from '../../i18n/i18n';
import {
    APP_PARAMS, FONT_FAMILIY, DIMENS, emailRegex, KEY, passRegex, SCREEN, WIDTH
} from '../../constants'
import CommonHeader from '../../common/CommonHeader'
import NavigationService from '../../NavigationService'
import { showInfoToast, showErrorToast, showToast } from '../../utility/Toast'
import { showMessage } from 'react-native-flash-message'
import * as Utils from '../../utility/Utils'
import Loader from '../../common/Loader'
import { storeData, retrieveData } from '../../common/AsyncStorage'
import CommonAddressView from '../../common/CommonAddressView';

//Library
import Orientation from 'react-native-orientation';
import CardView from 'react-native-cardview'
import Ripple from 'react-native-material-ripple';
import ActionSheet from 'react-native-actionsheet';
import { Dialog } from 'react-native-simple-dialogs';
import ImagePicker from 'react-native-image-crop-picker';

//Icons
import { IconX, ICON_TYPE } from '../../utility/Icons';

export default class Signup extends React.PureComponent {


    constructor(props) {
        super(props)
        this.passRef = undefined;
        this.state = {
            fullNameTxtField: '',
            emailTxtField: '',
            mobileNoTxtField: '',
            passTxtField: '',
            cPassTxtField: '',
            genderArray: [{ id: 1, name: 'Male', is_selected: true },
            { id: 2, name: 'Female', is_selected: false },
            { id: 3, name: 'Other', is_selected: false }],
            genderObj: { id: 1, name: 'Male', is_selected: true },
            countryArray: [],
            stateArray: [],
            cityArray: [],
            professionArray:['A','B','C'],
            actionCountryArray: [],
            actionStateArray: [],
            actionCityArray: [],
            countryObj: undefined,
            countryTxtField: '',
            stateTxtField: '',
            stateObj: undefined,
            cityTxtField: '',
            cityObj: undefined,
            professionTxtField: 'A',
            

            //image picker
            imagePath: undefined,
            isImagePicker: false,
            imageObject: undefined,
        }
    }

    componentDidMount() {
        Orientation.lockToPortrait();
        this.callCountryApi()
    }

    //call country api
    callCountryApi = () => {

        let requestData = {
        }
        this.props.requestCountryApi(requestData).then(result => {
            this.responseCountryApi(result)
        })
    }

    responseCountryApi = (response) => {

        if (response != undefined) {
            if (response.success === KEY.SUCCESS_) {
                //showToast(response.message)
                if (response.data != undefined && response.data != null) {
                    if (response.data.countries.length != 0) {
                        let newGenratedArray = [];
                        let countryDefaultObj = undefined;
                        response.data.countries.forEach((element, index, array) => {
                            newGenratedArray.push(element.country_name)
                            countryDefaultObj = array[0];
                        });
                        this.setState({
                            actionCountryArray: newGenratedArray,
                            countryObj: countryDefaultObj,
                            countryArray: response.data.countries,
                            countryTxtField: response.data.countries[0].country_name
                        }, () => {
                            this.callStateApi(response.data.countries[0].id)
                        })
                    } else {
                        this.setState({
                            actionCountryArray: [],
                            countryArray: [],
                            countryObj: undefined,
                            countryTxtField: ''
                        })
                    }
                } else {
                    this.setState({
                        actionCountryArray: [],
                        countryArray: [],
                        countryObj: undefined,
                        countryTxtField: ''
                    })
                    showErrorToast(response.message)
                }
            } else if (response.success == KEY.FAILED_) {
                this.setState({
                    actionCountryArray: [],
                    countryArray: [],
                    countryObj: undefined,
                    countryTxtField: ''
                })
                showErrorToast(response.message)
            }
        }
    }

    //call state api
    callStateApi = (ID) => {
        let requestData = {
            country_id: ID
        }
        this.props.requestStateApi(requestData).then(result => {
            this.responseStateApi(result)
        })
    }

    responseStateApi = (response) => {

        if (response != undefined) {
            if (response.success === KEY.SUCCESS_) {
                //showToast(response.message)
                if (response.data != undefined && response.data != null) {
                    if (response.data.states.length != 0) {
                        let newGenratedArray = [];
                        let stateDefaultObj = undefined;
                        response.data.states.forEach((element, index, array) => {
                            newGenratedArray.push(element.state_name)
                            stateDefaultObj = array[0];
                        });
                        this.setState({
                            actionStateArray: newGenratedArray,
                            stateObj: stateDefaultObj,
                            stateArray: response.data.states,
                            stateTxtField: response.data.states[0].state_name
                        }, () => {
                            this.callCityApi(response.data.states[0].id)
                        })
                    } else {
                        this.setState({
                            actionStateArray: [],
                            stateArray: [],
                            stateObj: undefined,
                            stateTxtField: ''
                        })
                    }
                } else {
                    this.setState({
                        actionStateArray: [],
                        stateArray: [],
                        stateObj: undefined,
                        stateTxtField: ''
                    })
                    showErrorToast(response.message)
                }
            } else if (response.success == KEY.FAILED_) {
                this.setState({
                    actionStateArray: [],
                    stateArray: [],
                    stateObj: undefined,
                    stateTxtField: ''
                })
                showErrorToast(response.message)
            }
        }
    }

    //call city api
    callCityApi = (ID) => {
        let requestData = {
            state_id: ID
        }
        this.props.requestCityApi(requestData).then(result => {
            this.responseCityApi(result)
        })
    }

    responseCityApi = (response) => {

        if (response != undefined) {
            if (response.success === KEY.SUCCESS_) {
                //showToast(response.message)
                if (response.data != undefined && response.data != null) {
                    if (response.data.cities.length != 0) {
                        let newGenratedArray = [];
                        let cityDefaultObj = undefined;
                        response.data.cities.forEach((element, index, array) => {
                            newGenratedArray.push(element.city_name)
                            cityDefaultObj = array[0];
                        });
                        this.setState({
                            actionCityArray: newGenratedArray,
                            cityObj: cityDefaultObj,
                            cityArray: response.data.cities,
                            cityTxtField: response.data.cities[0].city_name
                        })
                    } else {
                        this.setState({
                            actionCityArray: [],
                            cityArray: [],
                            cityObj: undefined,
                            cityTxtField: ''
                        })
                    }
                } else {
                    this.setState({
                        actionCityArray: [],
                        cityArray: [],
                        cityObj: undefined,
                        cityTxtField: ''
                    })
                    showErrorToast(response.message)
                }
            } else if (response.success == KEY.FAILED_) {
                this.setState({
                    actionCityArray: [],
                    cityArray: [],
                    cityObj: undefined,
                    cityTxtField: ''
                })
                showErrorToast(response.message)
            }
        }
    }

    //call signup api
    callSignupUserApi = () => {
        if (
            Utils.isValidFullName(this.state.fullNameTxtField, true) &&
            Utils.isValidEmail(this.state.emailTxtField, true) &&
            Utils.isValidMobileNumber(this.state.mobileNoTxtField, true) &&
            Utils.isValidPassword(this.state.passTxtField, true) &&
            Utils.isValidConfirmPassword(this.state.passTxtField, this.state.cPassTxtField, true) &&
            Utils.isValidCountry(this.state.countryTxtField,true) &&
            Utils.isValidState(this.state.stateTxtField,true) &&
            Utils.isValidCity(this.state.cityTxtField,true)
        ) {
            let requestData = {
                name: this.state.fullNameTxtField,
                email_address: this.state.emailTxtField,
                password: this.state.passTxtField,
                mobile_number: this.state.mobileNoTxtField,
                country_id: this.state.countryObj.id,
                state_id: this.state.stateObj.id,
                city_id: this.state.cityObj.id,
                image: this.state.imageObject,
                profession: this.state.professionTxtField,
                gender: this.state.genderObj.name,
                device_token:'abcd'
            }
            this.props.requestSignupUserApi(requestData).then(result => {
                this.responseSignupUserApi(result)
            })
        }
    }

    responseSignupUserApi = (response) => {
        console.warn('SIGNUPRESPONSE',response)
        if (response != undefined) {
            if (response.success === KEY.SUCCESS_) {
                //showToast(response.message)
                if (response.data != undefined && response.data != null) {
                    showToast(response.message)
                    this.onBackPress()
                } else {

                    showErrorToast(response.message)
                }
            } else if (response.success == KEY.FAILED_) {

                showErrorToast(response.message)
            }
        }
    }

    selectedCountryFromDropDown = (ind) => {
        if (this.state.countryArray.length != 0) {
            let previousArray = this.state.countryArray;
            let selectedItem = undefined;

            previousArray.forEach((element, index, array) => {
                if (ind == index) {
                    selectedItem = element;
                }
            });
            this.setState({
                countryObj: selectedItem,
                countryTxtField: selectedItem.country_name
            }, () => {
                this.callStateApi(selectedItem.id)
            })
        }
    }
    selectedStateFromDropDown = (ind) => {
        if (this.state.stateArray.length != 0) {
            let previousArray = this.state.stateArray;
            let selectedItem = undefined;

            previousArray.forEach((element, index, array) => {
                if (ind == index) {
                    selectedItem = element;
                }
            });
            this.setState({
                stateObj: selectedItem,
                stateTxtField: selectedItem.state_name
            }, () => {
                this.callCityApi(selectedItem.id)
            })
        }
    }

    selectedCityFromDropDown = (ind) => {

        if (this.state.cityArray.length != 0) {
            let previousArray = this.state.cityArray;
            let selectedItem = undefined;

            previousArray.forEach((element, index, array) => {
                if (ind == index) {
                    selectedItem = element;
                }
            });
            this.setState({
                cityObj: selectedItem,
                cityTxtField: selectedItem.city_name
            })
        }
    }
    selectedProfessionFromDropDown = (ind) => {

        if (this.state.professionArray.length != 0) {
            let previousArray = this.state.professionArray;
            let selectedItem = undefined;

            previousArray.forEach((element, index, array) => {
                if (ind == index) {
                    selectedItem = element;
                }
            });
            this.setState({
                professionTxtField: selectedItem
            })
        }
    }

    clickOnGender = (item, index) => {
        let savedGenderArray = this.state.genderArray;
        savedGenderArray.forEach(element => {
            if (element.id == item.id) {
                element.is_selected = true
            } else {
                element.is_selected = false
            }
        });
        setTimeout(() => {
            this.setState({
                genderArray: [...savedGenderArray],
                genderObj: item
            })
        }, 500);
    }

    selectProfilePic = (selectType) => {
        if (selectType == "Camera") {
            ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
            }).then(image => {
                if (image.path != undefined && image.path != '') {
                    var parts = image.path.split('/');
                    var loc = parts.pop();
                    var tempImageObject = {
                        uri: image.path,
                        type: 'image/jpeg',
                        name: 'abc.jpg'
                    }
                    //alert(tempImageObject)
                    console.log('image camera' + JSON.stringify(image))
                    this.setState({
                        imagePath: image.path,
                        imageObject: tempImageObject
                    });
                }

            });
        } else {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            }).then(image => {
                console.warn('gall', image)
                if (image.path != undefined && image.path != '') {
                    var parts = image.path.split('/');
                    var loc = parts.pop();
                    var tempImageObject = {
                        uri: image.path,
                        type: image.mime,
                        name: loc
                    }
                    console.log('image gallery' + JSON.stringify(image))
                    this.setState({
                        imagePath: image.path,
                        imageObject: tempImageObject,
                    });
                }
            });
        }
    }

    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    render() {
        const { loading } = this.props
        const { actionCountryArray, actionStateArray, actionCityArray, professionArray } = this.state

        return (
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: colors.color_primary_dark
                }}>
                <View style={{
                    width: '100%',
                    paddingHorizontal: DIMENS.px_15
                }}>
                    <Ripple
                        onPress={() => {
                            this.onBackPress()
                        }}>
                        <IconX
                            origin={ICON_TYPE.ICONICONS}
                            name='arrow-back'
                            color={colors.grey400}
                            size={36}
                        />
                    </Ripple>
                    <Text style={{
                        color: colors.white,
                        fontFamily: FONT_FAMILIY.Font_Regular,
                        fontSize: DIMENS.txt_size_large_extra,
                        position: 'absolute',
                        alignSelf: 'center',
                        textAlignVertical: 'center',
                        textAlign: 'center',
                        marginTop: DIMENS.px_8
                    }}>
                        {translate('SIGN_UP')}
                    </Text>
                </View>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        width: WIDTH,
                        padding: DIMENS.px_20,
                        alignItems: 'center'
                    }}>
                        {/* Uplaod image */}

                        <View
                            style={{
                                width: DIMENS.px_120,
                                height: DIMENS.px_120,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <View style={{
                                width: DIMENS.px_100,
                                height: DIMENS.px_100,
                            }}>
                                <Image
                                    style={{
                                        width: DIMENS.px_100,
                                        height: DIMENS.px_100,
                                        borderRadius: DIMENS.px_100 / 2,
                                        borderWidth: DIMENS.px_2,
                                        borderColor: colors.color_button_blue
                                    }}
                                    resizeMode={'cover'}
                                    source={(this.state.imagePath == undefined) ?
                                        AVTAR
                                        : {
                                            uri: this.state.imagePath,
                                        }}
                                />
                            </View>
                            <Ripple
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    marginBottom: DIMENS.px_20
                                }}
                                onPress={() => {
                                    this.setState({
                                        isImagePicker: true
                                    })
                                }}>
                                <Image
                                    style={{
                                        width: DIMENS.px_35,
                                        height: DIMENS.px_35,
                                    }}
                                    resizeMode={'contain'}
                                    source={IC_CAMERA}
                                />
                            </Ripple>
                        </View>
                        <Text style={{
                            color: colors.color_button_blue,
                            fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                            fontSize: DIMENS.txt_size_medium_1,
                            padding: DIMENS.px_10,
                            textAlign: 'center'
                        }}>
                            {translate('UPLOAD_PHOTO')}
                        </Text>
                        {/* All fields */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: '100%',
                            marginTop: DIMENS.px_15
                        }}>
                            {/* full name */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_FULL_NAME')}
                                        placeholderTextColor={colors.grey500}
                                        keyboardType={'default'}
                                        onChangeText={(txt) => {
                                            this.setState({ fullNameTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.emailRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.fullNameTxtField}
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

                            {/* email */}
                            <CardView
                                cardElevation={2}
                                cardMaxElevation={2}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    borderRadius: DIMENS.px_3,
                                    marginTop: DIMENS.px_10,
                                }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_EMAIL_ID')}
                                        placeholderTextColor={colors.grey500}
                                        keyboardType={'email-address'}
                                        onChangeText={(txt) => {
                                            this.setState({ emailTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.mobileRef.focus()}
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
                            {/* Gender */}
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                alignItems: 'center',
                                marginTop: DIMENS.px_15
                            }}>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Medium,
                                    fontSize: DIMENS.txt_size_medium_14,
                                    textAlign: 'center'
                                }}>
                                    {translate('PLACEHOLDER_GENDER')}
                                </Text>
                                {/* Gender type flatlist */}
                                <View style={{
                                    width: '100%'
                                }}>
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        horizontal
                                        scrollEnabled={true}
                                        data={this.state.genderArray}
                                        renderItem={({ item, index }) => this.renderGenderHoriList(item, index)}
                                        extraData={this.state}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                </View>
                            </View>
                            {/* Mobile number */}
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    marginTop: DIMENS.px_15,
                                }}>
                                {/* <View style={{
                                    width: '22%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: colors.color_primary,
                                    borderRadius: DIMENS.px_3,
                                }}>
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        textAlign: 'center'
                                    }}>
                                        {'+91'}
                                    </Text>
                                    <IconX
                                        origin={ICON_TYPE.ENTYPO}
                                        name='chevron-down'
                                        color={colors.grey400}
                                        size={28}
                                        style={{
                                            marginLeft: DIMENS.px_5
                                        }}
                                    />
                                </View> */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: colors.color_primary,
                                    borderRadius: DIMENS.px_3,
                                    // marginLeft: DIMENS.px_10
                                }}>
                                    <TextInput
                                        placeholder={translate('PLACEHOLDER_MOBILE_NO')}
                                        placeholderTextColor={colors.grey500}
                                        keyboardType={'phone-pad'}
                                        onChangeText={(txt) => {
                                            this.setState({ mobileNoTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.passRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.mobileNoTxtField}
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
                            </View>

                            {/* Password */}
                            <CardView
                                cardElevation={2}
                                cardMaxElevation={2}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    marginTop: DIMENS.px_10,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <TextInput
                                        secureTextEntry={true}
                                        placeholder={translate('PLACEHOLDER_PASSWRD')}
                                        placeholderTextColor={colors.grey500}
                                        keyboardType={'default'}
                                        ref={(refs) => this.passRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ passTxtField: txt })
                                        }}
                                        onSubmitEditing={() => this.cPassRef.focus()}
                                        returnKeyType="next"
                                        value={this.state.passTxtField}
                                        style={{
                                            width: '90%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.white,
                                            backgroundColor: colors.transparent,
                                            marginLeft: DIMENS.px_10
                                        }}
                                    />
                                </View>
                            </CardView>

                            {/* Confirm Password */}
                            <CardView
                                cardElevation={2}
                                cardMaxElevation={2}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    marginTop: DIMENS.px_10,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <TextInput
                                        secureTextEntry={true}
                                        placeholder={translate('PLACEHOLDER_CONFIRM_PASSWRD')}
                                        placeholderTextColor={colors.grey500}
                                        keyboardType={'default'}
                                        ref={(refs) => this.cPassRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ cPassTxtField: txt })
                                        }}
                                        returnKeyType="done"
                                        value={this.state.cPassTxtField}
                                        style={{
                                            width: '90%',
                                            minHeight: DIMENS.px_45,
                                            maxHeight: DIMENS.px_50,
                                            color: colors.white,
                                            backgroundColor: colors.transparent,
                                            marginLeft: DIMENS.px_10
                                        }}
                                    />
                                </View>
                            </CardView>

                            {/* Country */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    marginTop: DIMENS.px_10,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <Ripple
                                    style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        this.countryActionSheet.show()
                                    }}>
                                    <TextInput
                                        editable={false}
                                        keyboardType={'default'}
                                        placeholder={translate('COUNTRY')}
                                        placeholderTextColor={colors.grey500}
                                        ref={(refs) => this.countryRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ countryTxtField: txt })
                                        }}
                                        returnKeyType="done"
                                        value={this.state.countryTxtField}
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
                                    }}>
                                        <IconX
                                            origin={ICON_TYPE.ENTYPO}
                                            name='chevron-down'
                                            color={colors.grey400}
                                            size={22}
                                        />
                                    </View>
                                </Ripple>
                            </CardView>

                            {/* State */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    marginTop: DIMENS.px_10,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <Ripple style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                                    onPress={() => {
                                        this.stateActionSheet.show()
                                    }}>
                                    <TextInput
                                        editable={false}
                                        keyboardType={'default'}
                                        placeholder={translate('STATE')}
                                        placeholderTextColor={colors.grey500}
                                        ref={(refs) => this.stateRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ stateTxtField: txt })
                                        }}
                                        returnKeyType="done"
                                        value={this.state.stateTxtField}
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
                                    }}>
                                        <IconX
                                            origin={ICON_TYPE.ENTYPO}
                                            name='chevron-down'
                                            color={colors.grey400}
                                            size={22}
                                        />
                                    </View>
                                </Ripple>
                            </CardView>

                            {/* City */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    marginTop: DIMENS.px_10,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <Ripple style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                                    onPress={() => {
                                        this.cityActionSheet.show()
                                    }}>
                                    <TextInput
                                        editable={false}
                                        keyboardType={'default'}
                                        placeholder={translate('CITY')}
                                        placeholderTextColor={colors.grey500}
                                        ref={(refs) => this.cityRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ cityTxtField: txt })
                                        }}
                                        returnKeyType="done"
                                        value={this.state.cityTxtField}
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
                                    }}>
                                        <IconX
                                            origin={ICON_TYPE.ENTYPO}
                                            name='chevron-down'
                                            color={colors.grey400}
                                            size={22}
                                        />
                                    </View>
                                </Ripple>
                            </CardView>

                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Medium,
                                fontSize: DIMENS.txt_size_medium_14,
                                textAlign: 'left',
                                marginTop: DIMENS.px_10
                            }}>{translate('PROFESSION')}</Text>
                            {/* City */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.color_primary,
                                    marginTop: DIMENS.px_10,
                                    borderRadius: DIMENS.px_3
                                }}>
                                <Ripple style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                                onPress={()=>{
                                    this.professionActionSheet.show()
                                }}>
                                    <TextInput
                                        editable={false}
                                        placeholder={'Select Profession'}
                                        placeholderTextColor={colors.grey500}
                                        keyboardType={'default'}
                                        ref={(refs) => this.professionRef = refs}
                                        onChangeText={(txt) => {
                                            this.setState({ professionTxtField: txt })
                                        }}
                                        returnKeyType="done"
                                        value={this.state.professionTxtField}
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
                                    }}>
                                        <IconX
                                            origin={ICON_TYPE.ENTYPO}
                                            name='chevron-down'
                                            color={colors.grey400}
                                            size={22}
                                        />
                                    </View>
                                </Ripple>
                            </CardView>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                marginTop: DIMENS.px_10,
                                alignItems: 'center'
                            }}>
                                <Ripple
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_COMMON_PAGES, params: { param: translate('HEADER_TERMS_CONDITION') }, });
                                    }}>
                                    <Text style={{
                                        color: colors.red400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        textAlign: 'left',
                                        marginTop: DIMENS.px_10,
                                        textDecorationLine: 'underline'
                                    }}>{translate('HEADER_TERMS_CONDITION')}</Text>
                                </Ripple>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Medium,
                                    fontSize: DIMENS.txt_size_medium_14,
                                    textAlign: 'left',
                                    marginTop: DIMENS.px_10
                                }}>{' and '}</Text>
                                <Ripple
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_COMMON_PAGES, params: { param: translate('HEADER_PRIVACY_POLICY') }, });
                                    }}>
                                    <Text style={{
                                        color: colors.red400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium_14,
                                        textAlign: 'left',
                                        marginTop: DIMENS.px_10,
                                        textDecorationLine: 'underline'
                                    }}>{translate('HEADER_PRIVACY_POLICY')}</Text>
                                </Ripple>
                            </View>

                            {/* Login button */}
                            <Ripple style={{
                                width: '100%',
                                marginTop: DIMENS.px_20,
                                backgroundColor: colors.color_button_blue,
                                borderRadius: DIMENS.px_3,
                            }}
                                disabled={false}
                                onPress={() => {
                                    this.callSignupUserApi()
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_large_extra,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('SIGN_UP')}
                                    </Text>
                                }
                            </Ripple>
                        </View>

                        <ActionSheet
                            ref={o => this.countryActionSheet = o}
                            title={'Which one do you like ?'}
                            options={actionCountryArray}
                            cancelButtonIndex={0}
                            destructiveButtonIndex={1}
                            onPress={(index) => { this.selectedCountryFromDropDown(index) }}
                        />
                        <ActionSheet
                            ref={o => this.stateActionSheet = o}
                            title={'Which one do you like ?'}
                            options={actionStateArray}
                            cancelButtonIndex={0}
                            destructiveButtonIndex={1}
                            onPress={(index) => { this.selectedStateFromDropDown(index) }}
                        />
                        <ActionSheet
                            ref={o => this.cityActionSheet = o}
                            title={'Which one do you like ?'}
                            options={actionCityArray}
                            cancelButtonIndex={0}
                            destructiveButtonIndex={1}
                            onPress={(index) => { this.selectedCityFromDropDown(index) }}
                        />

                        <ActionSheet
                            ref={o => this.professionActionSheet = o}
                            title={'Which one do you like ?'}
                            options={professionArray}
                            cancelButtonIndex={0}
                            destructiveButtonIndex={1}
                            onPress={(index) => { this.selectedProfessionFromDropDown(index) }}
                        />
                    </View>
                </ScrollView>
                {loading ?
                    <Loader /> : null}
                {this.dialogForImagePicker()}
            </View>
        )
    }

    renderGenderHoriList = (item, index) => {
        console.log('item  ', item)
        return (
            <Ripple style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: DIMENS.px_10
            }}
                onPress={() => {
                    this.clickOnGender(item, index)
                }}>
                {item.is_selected ?
                    <IconX
                        origin={ICON_TYPE.ICONICONS}
                        name='radio-button-on'
                        color={colors.color_button_blue}
                        size={28}
                    />
                    :
                    <IconX
                        origin={ICON_TYPE.ICONICONS}
                        name='radio-button-off-sharp'
                        color={colors.grey400}
                        size={28}
                    />
                }
                <Text style={{
                    marginLeft: DIMENS.px_3,
                    color: colors.grey400,
                    fontFamily: FONT_FAMILIY.Font_Regular,
                    fontSize: DIMENS.txt_size_medium_14,
                    textAlign: 'center'
                }}>
                    {item.name}
                </Text>
            </Ripple>
        )
    }

    dialogForImagePicker() {

        return (
            <Dialog
                // ('none', 'slide', 'fade')
                contentStyle={{
                    padding: 0,
                    height: DIMENS.px_200,
                    backgroundColor: colors.white
                    //paddingBottom: FONT_AND_SPACE.SPACE_15
                }}
                animationType={'fade'}
                visible={this.state.isImagePicker}
                onTouchOutside={() => {
                    this.setState({
                        isImagePicker: false
                    })
                }
                } >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: '100%',
                        padding: DIMENS.px_10,
                        backgroundColor: colors.white
                    }}>
                    <View
                        style={{
                            paddingBottom: DIMENS.px_10,
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: colors.black_dark,
                            fontSize: DIMENS.txt_size_large_extra_20,
                            fontFamily: FONT_FAMILIY.Font_Medium
                        }}>
                            {translate('SELECT_IMAGE_FROM')}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            backgroundColor: colors.white
                        }}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={() => {
                                this.setState({
                                    isImagePicker: false
                                })
                                setTimeout(() => {
                                    this.selectProfilePic("Camera")
                                }, 1000)
                            }}
                            style={{
                                marginTop: DIMENS.px_20,
                            }}>
                            <Text style={{
                                color: colors.black,
                                fontSize: DIMENS.txt_size_large,
                                fontFamily: FONT_FAMILIY.Font_Medium
                            }}>
                                {translate('TAKE_PHOTO')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={() => {
                                this.setState({
                                    isImagePicker: false
                                })
                                setTimeout(() => {
                                    this.selectProfilePic("Gallery")
                                }, 1000)
                            }}
                            style={{
                                marginTop: DIMENS.px_20,
                            }}>
                            <Text style={{
                                color: colors.black,
                                fontSize: DIMENS.txt_size_large,
                                fontFamily: FONT_FAMILIY.Font_Medium
                            }}>
                                {translate('CHOOSE_FROM_GALLERY')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={() => {
                                this.setState({
                                    isSingleImage: false,
                                    isImagePicker: false
                                })
                            }}
                            style={{
                                marginTop: DIMENS.px_20,
                            }}>
                            <Text style={{
                                color: colors.black_dark,
                                fontSize: DIMENS.txt_size_medium_14,
                                fontFamily: FONT_FAMILIY.Font_Medium,
                                textAlign: 'right'
                            }}>
                                {translate('CANCEL')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog>
        )
    }
}
