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

export default class STLCourseSelection extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        console.log('componentDidMount of STLCourseSelection screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of STLCourseSelection screen')
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
                    header={translate('STL_COURSES')} />

                <View style={{
                    flex: 1,
                    padding: DIMENS.px_15,
                    marginTop: DIMENS.px_40
                }}>
                    {/* Course language selection */}
                    <CardView
                        cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={5}
                        style={{
                            width: '100%',
                            padding: DIMENS.px_25,
                            backgroundColor: colors.color_primary
                        }}>
                        <View
                            style={{
                                width: '100%',
                            }}>
                            <Text style={{
                                color: colors.white,
                                fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                fontSize: DIMENS.txt_size_medium_14,
                                textAlign: 'center'
                            }}
                            >
                                {translate('SELECT_PROGRAM_LANGUAGE')}
                            </Text>
                            {/* english button */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_25,
                                    backgroundColor: colors.color_button_blue,
                                    borderRadius: DIMENS.px_3,
                                }}>
                                <Ripple style={{
                                    width: '100%',
                                }}
                                    disabled={false}
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_LIST, params: { param: {} }, });
                                    }}>
                                    {
                                        <Text style={{
                                            color: colors.white,
                                            fontFamily: FONT_FAMILIY.Font_Regular,
                                            fontSize: DIMENS.txt_size_large,
                                            padding: DIMENS.px_10,
                                            textAlign: 'center'
                                        }}>
                                            {translate('ENGLISH')}
                                        </Text>
                                    }
                                </Ripple>
                            </CardView>

                            {/* hindi button */}
                            <CardView
                                cardElevation={5}
                                cardMaxElevation={5}
                                cornerRadius={5}
                                style={{
                                    width: '100%',
                                    marginTop: DIMENS.px_15,
                                    backgroundColor: colors.color_button_blue,
                                    borderRadius: DIMENS.px_3,
                                }}>
                                <Ripple style={{
                                    width: '100%',
                                }}
                                    disabled={false}
                                    onPress={() => {
                                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_LIST, params: { param: {} }, });
                                    }}>
                                    {
                                        <Text style={{
                                            color: colors.white,
                                            fontFamily: FONT_FAMILIY.Font_Regular,
                                            fontSize: DIMENS.txt_size_large,
                                            padding: DIMENS.px_10,
                                            textAlign: 'center'
                                        }}>
                                            {translate('HINDI')}
                                        </Text>
                                    }
                                </Ripple>
                            </CardView>
                        </View>
                    </CardView>
                </View>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}