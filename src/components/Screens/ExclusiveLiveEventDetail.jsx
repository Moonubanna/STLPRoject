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
import { IC_DUMMY_PAGER,IC_PLAYER_ICON } from '../../images'
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

export default class ExclusiveLiveEventDetail extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        console.log('componentDidMount of ExclusiveLiveEventDetail screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of ExclusiveLiveEventDetail screen')
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
                    header={translate('DETAILS')} />
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
                            cornerRadius={5}>
                            <View
                                style={{
                                    width: '100%',
                                    padding: DIMENS.px_10,
                                    backgroundColor: colors.color_primary,
                                    borderRadius: DIMENS.px_3,
                                    paddingVertical: DIMENS.px_40
                                }}>
                                <Text style={{
                                    color: colors.white,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_large_extra,
                                    textAlign: 'center'
                                }}
                                >
                                    {translate('CLICK_ENJOY_EXCLUSIVE')}
                                </Text>

                                <Text style={{
                                    color: colors.color_button_blue,
                                    fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                                    fontSize: DIMENS.txt_size_large_extra_20,
                                    textAlign: 'center',
                                    marginTop: DIMENS.px_30
                                }}
                                >
                                    {translate('LIVE_EVENT')}
                                </Text>

                                <Ripple
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_150,
                                        borderRadius: DIMENS.px_20,
                                        alignItems:'center',
                                        marginTop:DIMENS.px_50
                                    }}>
                                    <Image
                                        style={{
                                            width: '80%',
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
                                            marginTop: DIMENS.px_100 / 2
                                        }}
                                        resizeMode={'contain'}
                                        source={IC_PLAYER_ICON}
                                    />
                                </Ripple>

                                {/* english button */}
                        <CardView
                            cardElevation={5}
                            cardMaxElevation={5}
                            cornerRadius={5}
                            style={{
                                width: '80%',
                                marginTop:DIMENS.px_50,
                                backgroundColor: colors.color_button_blue,
                                borderRadius: DIMENS.px_3,
                                alignSelf:'center'
                            }}>
                            <Ripple style={{
                                width: '80%',
                                alignSelf:'center'
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
                                        {translate('WATCH_NOW')}
                                    </Text>
                                }
                            </Ripple>
                        </CardView>
                            </View>
                        </CardView>
                    </View>
                </ScrollView>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}