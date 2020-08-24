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
import MarqueeText from 'react-native-marquee';
import { IconX, ICON_TYPE } from '../../utility/Icons';
import HTML from 'react-native-render-html';

const { height, width } = Dimensions.get('screen')
import StarRating from 'react-native-star-rating';

export default class DemateAccountDetail extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            previousScreenName: this.props.navigation.state.params.param,
            savedLoginData: undefined,
            demateAccountObj:undefined,
            txtTitle: '',
            txtDetail: '',
            imageURL: ''
        }
    }
    componentDidMount() {
        console.log('componentDidMount of DemateAccountDetail screen')
        Orientation.lockToPortrait();

        retrieveData(KEY.USER_DATA, result => {
            if (result != undefined && result) {
                console.log('LOGINDDD' + JSON.stringify(result))
                this.setState({
                    savedLoginData: result
                }, () => {
                    this.callDemateDetailApi(result.user.id, this.state.previousScreenName.id)
                })
            }
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of DemateAccountDetail screen')
    }

    //call demate detail api
    callDemateDetailApi = (id, accountId) => {
        let requestData = {
            account_id: accountId,
            user_id: id,
        }
        this.props.requestDemateDetailApi(requestData).then(result => {
            this.responseDemateDetailApi(result)
        })
    }

    responseDemateDetailApi = (response) => {
        console.warn('DEMATEDTAILRESPONSE', response)
        if (response != undefined) {
            if (response.success === KEY.SUCCESS_) {
                //showToast(response.message)
                if (response.data != undefined && response.data != null) {
                    this.setState({
                        demateAccountObj:response.data.singleRecord,
                        txtTitle: response.data.singleRecord.title,
                        txtDetail: response.data.singleRecord.content,
                        imageURL: response.data.singleRecord.image_url,
                    })
                } else {
                    showErrorToast(response.message)
                }
            } else if (response.success == KEY.FAILED_) {

                showErrorToast(response.message)
            }
        }
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
                    header={translate('HEADER_DEMATE_ACCOUNT_LINK_DETAIL')} />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: DIMENS.px_10,
                        paddingBottom: DIMENS.px_10
                    }}>
                        <Ripple
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
                            <View
                                style={{
                                    width: '70%',
                                    flexDirection: 'column',
                                    paddingVertical: DIMENS.px_10,
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    alignSelf: 'center',
                                }}>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_large_extra,
                                    marginLeft: DIMENS.px_20,
                                }}
                                    numberOfLines={5}>
                                    {this.state.txtTitle}
                                </Text>
                            </View>
                        </Ripple>
                        <Text style={{
                            marginTop: DIMENS.px_20,
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                            fontSize: DIMENS.txt_size_medium_14,
                            textAlign: 'center'
                        }}
                        >
                            {translate('T_C')}
                        </Text>
                        <View
                            style={{
                                marginTop: DIMENS.px_10,
                                width: '100%'
                            }}>
                            <HTML html={this.state.txtDetail} imagesMaxWidth={Dimensions.get('window').width}/>
                        </View>
                        {/* <Text style={{
                            marginTop: DIMENS.px_10,
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            fontSize: DIMENS.txt_size_medium_14,
                            textAlign: 'center'
                        }}
                        >
                            {this.state.txtDetail}
                        </Text> */}

                        {/* open account button */}
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
                                    if(this.state.demateAccountObj != undefined &&
                                        this.state.demateAccountObj.merchant_url != undefined &&
                                        this.state.demateAccountObj.merchant_url != null){
                                            
                                        }
                                }}>
                                {
                                    <Text style={{
                                        color: colors.white,
                                        fontFamily: FONT_FAMILIY.Font_Regular,
                                        fontSize: DIMENS.txt_size_large,
                                        padding: DIMENS.px_10,
                                        textAlign: 'center'
                                    }}>
                                        {translate('OPEN_ACCOUNT_NOW')}
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