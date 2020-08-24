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
import { IC_DUMMY_PAGER } from '../../images'
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

const { height, width } = Dimensions.get('screen')
import StarRating from 'react-native-star-rating';

export default class DemateLinksList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            //previousScreenName:this.props.navigation.state.params.param.screen_name,
            stlCourseArray: [],
            savedLoginData: undefined,
        }
    }
    componentDidMount() {
        console.log('componentDidMount of DemateLinksList screen')
        Orientation.lockToPortrait();
        retrieveData(KEY.USER_DATA, result => {
            if (result != undefined && result) {
                console.log('LOGINDDD' + JSON.stringify(result))
                this.setState({
                    savedLoginData: result
                })
                this.callDemateLinkApi(result.user.id)
            }
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of DemateLinksList screen')
    }

    //call demate ink api
    callDemateLinkApi = (id) => {
        let requestData = {
            user_id: id,
        }
        this.props.requestDemateLinkApi(requestData).then(result => {
            this.responseDemateLinkApi(result)
        })
    }

    responseDemateLinkApi = (response) => {
        console.warn('DETAILLINKRESPONSE', response)
        if (response != undefined) {
            if (response.success === KEY.SUCCESS_) {
                //showToast(response.message)
                if (response.data != undefined && response.data.accounts != undefined &&
                    response.data.accounts.length != 0) {
                    this.setState({
                        stlCourseArray: response.data.accounts
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
                    header={translate('HEADER_DEMATE_ACCOUNT_LINK_LIST')} />

                <View style={{
                    flex: 1,
                    paddingHorizontal: DIMENS.px_10,
                    paddingBottom: DIMENS.px_10
                }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.stlCourseArray}
                        renderItem={({ item, index }) => this.stlCourseVerticalItem(item, index)}
                        extraData={this.state}
                        keyExtractor={(item, index) => item.id.toString()}
                        style={{}}
                    />
                </View>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }

    stlCourseVerticalItem = (item, index) => {
        console.log('item  ', item)
        return (
            <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={{
                    width: '100%',
                    backgroundColor: colors.color_primary,
                    marginTop: DIMENS.px_10,
                    borderRadius: DIMENS.px_3,
                }}>
                <Ripple style={{
                    width: '100%',
                    justifyContent: 'center'
                }}
                    onPress={() => {
                        NavigationService.navigate({ routeName: SCREEN.SCREEN_DEMATE_LINK_DETAIL, params: { param: item }, });
                    }}>
                    <Image
                        style={{
                            width: '100%',
                            height: DIMENS.px_150
                        }}
                        resizeMode={'cover'}
                        source={IC_DUMMY_PAGER}
                    />
                    <View
                        style={{
                            width: '70%',
                            flexDirection: 'column',
                            paddingVertical: DIMENS.px_10,
                            justifyContent: 'center',
                            position: 'absolute',
                            alignSelf: 'center',
                            marginTop: DIMENS.px_100 / 2
                        }}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                            fontSize: DIMENS.txt_size_large_extra_20,
                            marginLeft: DIMENS.px_20,
                        }}
                            numberOfLines={1}>
                            {item.title}
                        </Text>
                    </View>

                </Ripple>
            </CardView>
        )
    }
}