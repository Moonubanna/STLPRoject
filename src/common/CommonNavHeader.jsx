import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { BACK, MENU, NOTIFICATION ,ORDER, PLUS} from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'

import { colors } from '../theme'
import { DIMENS, FONT_FAMILIY } from '../constants'

export default ({backImg ,backPress,rightIcon1Press,cartPress,title,rightImgWithTxt,rightTxtstyle,
    rightIcon,rightIcon1,rightIcon2,searchPress,rightBtnClr,rightBtnText,rightBtnPress,rightBtnStyle}) => (
    <View style={{
        backgroundColor: colors.header,
        paddingRight: 10,
        justifyContent: 'center',
        height: global.HeaderHeight != undefined ? global.HeaderHeight : 60
    }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>
            <View style={{ flexDirection: 'row', flex: .7,alignItems:'center'  }}>
                <Ripple onPress={backPress} style={{alignItems:'center',paddindHorizontal:10}}>
                    <Image source={backImg!=undefined?backImg:BACK} style={{ tintColor:colors.white,height: DIMENS.px_25, width: DIMENS.px_25}}  resizeMode= {'center'} />
                </Ripple>
                {/* Title*/}
               {title &&
                <Text style={[styles.headerText,{marginHorizontal:DIMENS.px_10}]}>{title}</Text>
               }
                </View>
            {
               
            <View style={{ flexDirection: 'row', flex: .3, justifyContent:rightIcon==undefined&&rightIcon1==undefined ?'flex-end':'space-evenly',alignItems:'center',marginRight:rightIcon==undefined&&rightIcon1==undefined ?8:undefined }}>
                {/* Notification*/}
                {
                    rightBtnText&&
                    <Ripple onPress={rightBtnPress} style={rightBtnStyle}>
                        {rightImgWithTxt&&
                        <Image source={PLUS} style={{width:DIMENS.px_10,height:DIMENS.px_10,marginRight:DIMENS.px_5}}/>}
                        <Text style={[{fontSize:DIMENS.txt_size_medium_1,fontFamily:FONT_FAMILIY.Roboto_Regular,color:rightBtnClr
                        },rightTxtstyle]}>{rightBtnText}</Text>
                    </Ripple>
                }
               { 
                rightIcon && 
                <Ripple onPress={searchPress}>
                <Image source={rightIcon} style={{ height: DIMENS.px_18, width:DIMENS.px_18, resizeMode: 'contain' }} />
            </Ripple>}
                {
                rightIcon1&&
               <Ripple onPress={rightIcon1Press}>
                    <Image source={rightIcon1} style={{ height: DIMENS.px_20, width: DIMENS.px_20, resizeMode: 'contain',marginLeft: DIMENS.px_10 }} />
                </Ripple>}
                {/* Cart*/}
               { rightIcon2&&
                <Ripple onPress={cartPress}>
                    <Image source={rightIcon2} style={{height: DIMENS.px_22, width: DIMENS.px_22, resizeMode: 'center', marginLeft: DIMENS.px_10 }} />
                </Ripple>}
            </View>
            }
        </View>

    </View>
)