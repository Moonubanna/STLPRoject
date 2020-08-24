import React from 'react'
import { Image, TouchableOpacity, View, Text, Picker } from 'react-native'
import { BACK, MENU, NOTIFICATION, ORDER, STAR, DOWN_ARR,DELETE } from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'

import { colors } from '../theme'
import { DIMENS, FONT_FAMILIY, CURRENCY, WIDTH, HEIGHT } from '../constants'
import Basecomponents from './BaseComponent'
import { Dropdown } from 'react-native-material-dropdown';
import translate from '../i18n/i18n'


export default class CommonOrderSummaryProduct extends Basecomponents {
    constructor(props) {
        super(props)
        this.state = {
            dropTxtValue: '1'
        }
    }
    render() {
        const { item, onPress, data, txt ,isRemove,isSaveForLater } = this.props
        return (
            <View style={{ borderBottomColor: colors.lightGraytransparent, borderBottomWidth: DIMENS.px_5, width: '100%',
            paddingBottom:isRemove?15:0 }}>
                <View style={{ paddingHorizontal: 10, paddingTop: 20,marginBottom:20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* <Image source={item.uri} style={{ width: WIDTH * 20 / 100, height: 100}} resizeMode={'contain'} /> */}
                        <View style={{}}>
                            <Text style={{ color: colors.black, fontSize: DIMENS.txt_size_medium_1, fontFamily: FONT_FAMILIY.Roboto_Medium }}>
                                {item.name}</Text>
                            {
                                item.rating != undefined &&
                                <View style={{ flexDirection: 'row', marginVertical: DIMENS.px_10, alignItems: 'center' }}>
                                    <Text style={{ color: colors.green, fontSize: DIMENS.txt_size_medium, fontFamily: FONT_FAMILIY.Roboto_Regular }}>
                                        {item.rating}</Text>
                                    <Image source={STAR} style={{ width: DIMENS.px_5, height: DIMENS.px_5, marginHorizontal: DIMENS.px_2 }} />
                                    {
                                        item.ratingCount != undefined &&
                                        <Text style={{ color: colors.lightGrayClr, fontSize: DIMENS.txt_size_medium, fontFamily: FONT_FAMILIY.Roboto_Regular }}>
                                            {'(' + item.ratingCount + ')'}</Text>
                                    }

                                </View>}
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <Text style={{ color: colors.black, fontSize: DIMENS.txt_size_large, fontFamily: FONT_FAMILIY.Roboto_Medium }}>
                                    {CURRENCY.RUPEES + item.price}</Text>
                                {
                                    item.discountPrice &&
                                    <Text style={{ marginLeft: DIMENS.px_8, textDecorationLine: 'line-through', color: colors.lightGrayClr, fontSize: DIMENS.txt_size_medium, fontFamily: FONT_FAMILIY.Roboto_Regular }}>
                                        {CURRENCY.RUPEES + item.discountPrice + ' '}</Text>
                                }


                            </View>

                            {
                                item.offer != undefined &&
                                <Text style={{
                                    marginVertical: DIMENS.px_10, color: colors.black,
                                    fontSize: DIMENS.txt, fontFamily: FONT_FAMILIY.Roboto_Regular,
                                    backgroundColor: colors.bgOfTxt, padding: 12, alignSelf: 'flex-start', borderRadius: 3
                                }}>
                                    {item.offer}</Text>
                            }
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Image source={item.uri} style={{ width: WIDTH * 25 / 100, height: 70, resizeMode: 'contain', }} />
                            <View style={{padding: DIMENS.px_15}}>
                                <Dropdown
                                style={{}}
                                    onChangeText={(text) => this.setState({ dropTxtValue: text })}
                                    data={data}
                                    renderBase={(item,index) => {
                                        return (
                                            <View style={{ flexDirection: 'row', backgroundColor: colors.bgOfTxt, 
                                            borderRadius: 3, padding:DIMENS.px_10, alignItems: 'center' }}
                                                >
                                                <Text style={{
                                                    color: colors.black,
                                                    fontSize: DIMENS.txt, fontFamily: FONT_FAMILIY.Roboto_Regular,
                                                    alignSelf: 'flex-start',
                                                }}>
                                                    {translate('QTY') + " :" + this.state.dropTxtValue}</Text>
                                                <Image source={DOWN_ARR} style={{ width: 16, height: 8, resizeMode: 'center' }} />
                                            </View>)
                                    }
                                }
                                />
                            </View>
                        </View>

                    </View>

                    {
                        item.deliveryTime != undefined &&
                        <View style={{ marginTop: 10}}>
                            <Text style={{
                                color: colors.black,
                                fontSize: DIMENS.txt_size_medium,
                                fontFamily: FONT_FAMILIY.Roboto_Regular,
                            }}> {translate('DELIVER_BY')}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={{
                                    color: colors.black,
                                    fontSize: DIMENS.txt_size_medium,
                                    fontFamily: FONT_FAMILIY.Roboto_Regular,
                                    fontWeight: '500', textAlign: 'left'
                                }}> {item.deliveryTime}</Text>
                                <Text style={{
                                    color: colors.green,
                                    fontSize: DIMENS.txt_size_medium, fontFamily: FONT_FAMILIY.Roboto_Regular,
                                    marginRight: DIMENS.px_5, fontWeight: '500'
                                }}>{`( ${item.deliveryType} )`}</Text>
                            </View>
                        </View>
                    }
                    
                  </View>
                {
                        isRemove && 
                        <Ripple style={{flexDirection: 'row',
                         paddingVertical: DIMENS.px_10,right:10,position:'absolute' ,bottom:10
                        }}
                                onPress={onPress}>
                                <Image source={DELETE} style={{ width: 20, height: 18, resizeMode: 'center',tintColor:colors.grayClr }} />

                                <Text style={{
                                    color: colors.grayClr,textAlign:'right',
                                    fontSize: DIMENS.txt, fontFamily: FONT_FAMILIY.Roboto_Regular,
                                     marginRight: DIMENS.px_5,
                                }}>
                                    {translate('REMOVE')}</Text>
                            </Ripple> 
                    }
            </View>
        )
    }
}