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

export default class ExclusivelivePay extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            previousScreenName: this.props.navigation.state.params.param.screen_name,
            cuponCodeTxtField: '',
            partnerCodeTxtField: '',
            timelineArray: [{ id: 1, name: '1 Month', is_selected: true },
            { id: 2, name: '2 Month', is_selected: false },
            { id: 3, name: '3 Month', is_selected: false }],
        }
    }
    componentDidMount() {
        console.log('componentDidMount of ExclusivelivePay screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of ExclusivelivePay screen')
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
                        paddingHorizontal: DIMENS.px_10,
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
                                    borderRadius: DIMENS.px_3
                                }}>
                                
                                {/* Price */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('PRICE')}
                                    </Text>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {'****'}
                                    </Text>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* Have a coupo code */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('HAVE_A_COUPON_CODE')}
                                    </Text>
                                    <View style={{
                                        width: DIMENS.px_80,
                                        height: DIMENS.px_30,
                                        borderWidth: DIMENS.px_05,
                                        borderRadius: DIMENS.px_3,
                                        borderColor: colors.grey400,
                                        paddingLeft: DIMENS.px_10
                                    }}>
                                        <TextInput
                                            keyboardType={'default'}
                                            ref={(refs) => this.cuponCodeRef = refs}
                                            onChangeText={(txt) => {
                                                this.setState({ cuponCodeTxtField: txt })
                                            }}
                                            returnKeyType="done"
                                            value={this.state.cuponCodeTxtField}
                                            style={{
                                                width: '100%',
                                                minHeight: DIMENS.px_30,
                                                maxHeight: DIMENS.px_30,
                                                color: colors.white,
                                                backgroundColor: colors.transparent,
                                            }}
                                        />
                                    </View>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* Have a partner code */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('HAVE_A_PARTNER_CODE')}
                                    </Text>
                                    <View style={{
                                        width: DIMENS.px_80,
                                        height: DIMENS.px_30,
                                        borderWidth: DIMENS.px_05,
                                        borderRadius: DIMENS.px_3,
                                        borderColor: colors.grey400,
                                        paddingLeft: DIMENS.px_10
                                    }}>
                                        <TextInput
                                            keyboardType={'default'}
                                            ref={(refs) => this.partnerCodeRef = refs}
                                            onChangeText={(txt) => {
                                                this.setState({ partnerCodeTxtField: txt })
                                            }}
                                            returnKeyType="done"
                                            value={this.state.partnerCodeTxtField}
                                            style={{
                                                width: '100%',
                                                minHeight: DIMENS.px_30,
                                                maxHeight: DIMENS.px_30,
                                                color: colors.white,
                                                backgroundColor: colors.transparent,
                                            }}
                                        />
                                    </View>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* Have a partner code */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('TOTAL_PRICE')}
                                    </Text>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {'****'}
                                    </Text>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* gst */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('GST')}
                                    </Text>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {'18%'}
                                    </Text>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* grand total */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('GRAND_TOTAL')}
                                    </Text>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {'****'}
                                    </Text>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* have a gst */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: DIMENS.px_15
                                }}>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {translate('HAVE_A_GST')}
                                    </Text>
                                    <Text style={{
                                        color: colors.grey400,
                                        fontFamily: FONT_FAMILIY.Font_Medium,
                                        fontSize: DIMENS.txt_size_medium,
                                        textAlign: 'center'
                                    }}
                                    >
                                        {'****'}
                                    </Text>
                                </View>

                                {/* Line view */}
                                <View
                                    style={{
                                        width: '100%',
                                        height: DIMENS.px_05,
                                        backgroundColor: colors.grey400,
                                    }}
                                />
                                {/* buttons views */}
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    marginTop: DIMENS.px_15,
                                    marginBottom: DIMENS.px_15
                                }}>

                                    {/* decline button */}
                                    <CardView
                                        cardElevation={5}
                                        cardMaxElevation={5}
                                        cornerRadius={5}
                                        style={{
                                            width: '47%',
                                            backgroundColor: colors.red400,
                                            borderRadius: DIMENS.px_3,
                                        }}>
                                        <Ripple
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
                                                    {translate('DECLINE')}
                                                </Text>
                                            }
                                        </Ripple>
                                    </CardView>

                                    {/* ok button */}
                                    <CardView
                                        cardElevation={5}
                                        cardMaxElevation={5}
                                        cornerRadius={5}
                                        style={{
                                            width: '47%',
                                            backgroundColor: colors.color_button_blue,
                                            borderRadius: DIMENS.px_3,
                                        }}>
                                        <Ripple
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
                                                    {translate('OK')}
                                                </Text>
                                            }
                                        </Ripple>
                                    </CardView>
                                </View>
                            </View>
                        </CardView>
                    </View>
                </ScrollView>
                {loading ?
                    <Loader /> : null}
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
}