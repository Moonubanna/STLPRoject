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


//Icons
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const cityArray = [
    'jaipur', 'ajmer', 'nagaur'
]

const BottomBarData = [
    {
        image: require('../../assets/gif/order1.gif'),
        'name': 'Dead Drop',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: require('../../assets/gif/order2.gif'),
        'name': 'Zi Network',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: require('../../assets/gif/order3.gif'),
        'name': 'RELIC',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: require('../../assets/gif/order4.gif'),
        'name': 'POWERLYNC',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: require('../../assets/gif/order5.gif'),
        'name': 'NODE',
        ratting: '3.2',
        desc: 'Description'
    },
    {
        image: require('../../assets/gif/order6.gif'),
        'name': 'LOOTBOX',
        ratting: '3.2',
        desc: 'Description'
    },
    // {
    //     image: require('../../assets/gif/order6.gif'),
    //     'name': 'OTHERS',
    //     ratting: '3.2',
    //     desc: 'Description'
    // },
]


export default class Objects extends React.PureComponent {
    constructor(props) {
        super(props)


        this.state = {
            bottomBarData: BottomBarData,
            searchHoldArray: BottomBarData,
            searchTxtField: ''
        }
    }
    componentDidMount() {
        console.log('componentDidMount of Objects screen')
        Orientation.lockToPortrait();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount of Objects screen')
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%', alignItems: 'center',
                    backgroundColor: colors.grey500,
                }}
            />
        );
    }
    onBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }

    SearchFilterFunction(text) {
        if (text != undefined && text != null && text != '') {
            if (this.state.searchHoldArray.length != 0) {
                //passing the inserted text in textinput
                const newData = this.state.bottomBarData.filter(function (item) {
                    //applying filter for the inserted text in search bar
                    const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                this.setState({
                    //setting the filtered newData on datasource
                    //After setting the data it will automatically re-render the view
                    bottomBarData: [...newData],
                    searchTxtField: text,
                });
            }
        } else {
            this.setState({
                bottomBarData: this.state.searchHoldArray,
                searchTxtField: ''
            })
        }
    }

    render() {
        const { data, loading } = this.props

        return (
            <View style={{
                backgroundColor: colors.grey200,
                flex: 1, width: '100%',
            }}>
                <CommonHeaderHome
                    backPress={() => this.onBackPress()}
                    isBack={true}
                    size={12}
                    isRightIcon={false}
                    isRightNoti={true}
                    header={translate('OBJECT')} />

                <View style={{
                    flex: 1, padding: DIMENS.px_10
                }}>

                    <TextInput
                        placeholder={translate('SEARCH_')}
                        placeholderTextColor={colors.grey400}
                        keyboardType={'default'}
                        ref={(refs) => this.searchRef = refs}
                        onChangeText={(txt) => {
                            //this.setState({ searchTxtField: txt })
                            this.SearchFilterFunction(txt)
                        }}
                        returnKeyType="done"
                        value={this.state.searchTxtField}
                        style={{
                            width: '100%',
                            top: -20,
                            paddingLeft: 10,
                            minHeight: DIMENS.px_45,
                            maxHeight: DIMENS.px_50,
                            color: colors.black,
                            backgroundColor: colors.white,
                            elevation: 0.5,
                            borderRadius: 3,

                        }}
                    />
                    <View style={{
                        flex: 1,
                        margin: 5,
                        marginTop:-20,
                    }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.bottomBarData}
                            renderItem={({ item, index }) => RenderBottomBar(item, index)}
                            extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            style={{}}
                        />

                        <Ripple style={{
                            width: '13%',
                            height: '7%',
                            right: 10,
                            bottom: 10,
                            alignSelf: 'center',
                            //  marginTop: DIMENS.px_80,
                            backgroundColor: colors.yellow600,
                            borderRadius: DIMENS.px_5,
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}
                            disabled={false}
                            onPress={() => {
                                // this.props.navigation.navigate('OrganisationDetail')

                            }}>
                            {
                                <IconX
                                    origin={ICON_TYPE.ANT_ICON}
                                    name='plus'
                                    color={colors.black}
                                    size={25}
                                />
                            }
                        </Ripple>

                    </View>



                </View>




                {loading ?
                    <Loader /> : null}
            </View>
        )
    }
}

const RenderBottomBar = (item, index) => {
    console.log('item  ', item)
    return (
        <Ripple style={{
            display: 'flex', alignItems: 'center',
            flexDirection: 'row',
            elevation: 0.5, backgroundColor: 'white', marginVertical: 10
        }}>
            <View style={{
                display: 'flex', alignItems: 'center',
                flexDirection: 'row',
                padding: DIMENS.px_15,
                borderRadius: 3
            }}>
                <Image
                    style={{
                        width: DIMENS.px_35,
                        height: DIMENS.px_35,
                        marginLeft: DIMENS.px_15
                    }}
                    resizeMode={'contain'}
                    source={item.image}
                />
                <Text style={{
                    color: colors.black,
                    fontFamily: FONT_FAMILIY.Font_Regular,
                    fontSize: DIMENS.txt_size_large_extra,
                    padding: DIMENS.px_15,
                    textAlign: 'center',
                    flex: 1
                }}>
                    {item.name}

                </Text>
            </View>


        </Ripple>
    )
}