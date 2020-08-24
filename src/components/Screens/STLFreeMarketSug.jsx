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

export default class STLFreeMarketSug extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            stlCourseArray: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },]
        }
    }
    componentDidMount() {
        console.log('componentDidMount of STLFreeMarketSug screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of STLFreeMarketSug screen')
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
                    header={translate('HEADER_STL_FREE_MARKET_SUG')} />

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
                <View style={{
                    alignSelf: 'flex-end',
                    marginTop: DIMENS.px_20,
                }}>
                    <View style={{
                        width: '90%',
                        backgroundColor: colors.color_button_blue,
                        borderRadius: DIMENS.px_3,
                        justifyContent: 'flex-end',
                        borderTopLeftRadius: DIMENS.px_15,
                        borderTopRightRadius: DIMENS.px_15,
                        borderBottomLeftRadius: DIMENS.px_15,
                        padding: DIMENS.px_15,
                    }}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            fontSize: DIMENS.txt_size_medium_14,
                            padding: DIMENS.px_10,
                            textAlign: 'center'
                        }}>
                            {'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                        </Text>
                    </View>
                    <Text style={{
                            color: colors.grey400,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            fontSize: DIMENS.txt_size_small_12,
                            padding: DIMENS.px_10,
                            textAlign: 'right'
                        }}>
                            {'10/08/2020 06:00PM'}
                        </Text>
                </View>
        )
    }
}