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

export default class STLCourseList extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            previousScreenName:this.props.navigation.state.params.param.screen_name,
            stlCourseArray: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },]
        }
    }
    componentDidMount() {
        console.log('componentDidMount of STLCourseList screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of STLCourseList screen')
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
                    paddingHorizontal: DIMENS.px_10,
                    paddingBottom:DIMENS.px_10
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
                    flexDirection: 'row',
                    width: '100%',
                    padding: DIMENS.px_10,
                    backgroundColor: colors.color_primary,
                    marginTop: DIMENS.px_10,
                    borderRadius: DIMENS.px_3,
                }}>
                <Ripple style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center'
                }}
                onPress={()=>{
                    if(this.state.previousScreenName != undefined && this.state.previousScreenName == 'Drawer'){
                        NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_PROGRAMS_PLAY, params: { param: {screen_name:'Drawer'} }, });
                       
                        }else{
                            NavigationService.navigate({ routeName: SCREEN.SCREEN_STL_COURSE_PROGRAMS, params: { param: {screen_name:translate('STL_COURSES')} }, });
                        }
                }}>
                    <Image
                        style={{
                            width: '30%',
                            height: '100%'
                        }}
                        resizeMode={'cover'}
                        source={IC_DUMMY_PAGER}
                    />
                    <View
                        style={{
                            width: '70%',
                            flexDirection: 'column',
                            marginLeft: DIMENS.px_10,
                            paddingVertical: DIMENS.px_10,
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: colors.white,
                            fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                            fontSize: DIMENS.txt_size_medium_14,
                        }}
                            numberOfLines={1}>
                            {'What is Next for Market'}
                        </Text>

                        <Text style={{
                            color: colors.grey400,
                            fontFamily: FONT_FAMILIY.Font_Regular,
                            fontSize: DIMENS.txt_size_medium_14,
                            marginTop: DIMENS.px_5
                        }}
                            numberOfLines={2}>
                            {'Welcome to Super Trader Lakshaya to Learn Tranding Mail'}
                        </Text>

                        <Text style={{
                            color: colors.color_button_blue,
                            fontFamily: FONT_FAMILIY.Font_Bold_Fully,
                            fontSize: DIMENS.txt_size_medium_14,
                            marginTop: DIMENS.px_5
                        }}
                            numberOfLines={1}>
                            {'Rs. 8000/-'}
                        </Text>
                    </View>

                </Ripple>
            </CardView>
        )
    }
}