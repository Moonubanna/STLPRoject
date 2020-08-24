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

export default class CommonPages extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            previousScreenName: undefined
        }
    }
    componentDidMount() {
        console.log('componentDidMount of CommonPages screen')
        Orientation.lockToPortrait();
        this.setState({
            previousScreenName: this.props.navigation.state.params.param
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of CommonPages screen')
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
                    header={this.state.previousScreenName != undefined && this.state.previousScreenName == translate('HEADER_ABOUT_US') ? translate('HEADER_ABOUT_US')
                        : this.state.previousScreenName != undefined && this.state.previousScreenName == translate('HEADER_TERMS_CONDITION') ? translate('HEADER_TERMS_CONDITION')
                            : this.state.previousScreenName != undefined && this.state.previousScreenName == translate('HEADER_PRIVACY_POLICY') ? translate('HEADER_PRIVACY_POLICY')
                        :translate('HEADER_REFUND_POLICY')} />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: DIMENS.px_15,
                        paddingBottom: DIMENS.px_10
                    }}>
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
                    </View>
                </ScrollView>
                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}