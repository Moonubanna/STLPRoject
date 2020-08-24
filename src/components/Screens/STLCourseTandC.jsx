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

export default class STLCourseTandC extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            previousScreenName:this.props.navigation.state.params.param.screen_name
        }
    }
    componentDidMount() {
        console.log('componentDidMount of STLCourseTandC screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of STLCourseTandC screen')
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
                    header={this.state.previousScreenName != undefined && this.state.previousScreenName == translate('STL_COURSES') ? translate('STL_COURSES') : translate('STL_PREMIUM_CLUB')} />
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
                            <Image
                                style={{
                                    width: DIMENS.px_60,
                                    height: DIMENS.px_60,
                                    position: 'absolute',
                                    alignSelf: 'center',
                                    marginTop: DIMENS.px_60 / 2
                                }}
                                resizeMode={'contain'}
                                source={IC_PLAYER_ICON}
                            />
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
                        <Text style={{
                            marginTop: DIMENS.px_10,
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            fontSize: DIMENS.txt_size_medium_14,
                            textAlign: 'center'
                        }}
                        >
                            {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
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
                                    if(this.state.previousScreenName != undefined && this.state.previousScreenName == translate('STL_COURSES')){
                                    NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_PAY, params: { param: {screen_name:translate('STL_COURSES')} }, });
                                    }else if(this.state.previousScreenName != undefined && this.state.previousScreenName == translate('SCREEN_STL_PREMIUM_CLUB')){
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_PAY, params: { param: {screen_name:translate('STL_PREMIUM_CLUB')} }, });
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
                                        {translate('PAY_NOW')}
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