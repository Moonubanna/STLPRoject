import React from 'react'
import { Image, TouchableOpacity, View, Text, Platform } from 'react-native'
import { IC_MENU, AVTAR } from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'

import { colors } from '../theme'
import { DIMENS } from '../constants'
import { FONT_FAMILIY } from '../constants/index'
import translate from '../i18n/i18n'

//share icon
import Icon from 'react-native-vector-icons/Ionicons';
import IconMenu from 'react-native-vector-icons/Ionicons';
import IconPlusButton from 'react-native-vector-icons/AntDesign';
import IconLogout from 'react-native-vector-icons/MaterialCommunityIcons';
import IconTrade from 'react-native-vector-icons/MaterialCommunityIcons';
export default ({ menuPress, header, size, backPress, isBack, logOutPress,
    isRightIcon, isRightNoti, isRightPlusButton, isRightLogout, isRightTrade,
    rightProfilePress }) => (
        <View style={{
            flexDirection: 'row',
            backgroundColor: colors.yellow600,
            paddingHorizontal: 10,
            height: 60,
            alignItems: 'center'
        }}>
            <Ripple
                onPress={isBack ? backPress : menuPress}
                style={{
                    width: DIMENS.px_30,
                    height: DIMENS.px_25,
                    justifyContent: 'center',
                    marginLeft: DIMENS.px_5,
                    // marginLeft: DIMENS.px_5,
                }}>
                {isBack ?
                    <IconMenu
                        name={'arrow-back'}
                        size={32}
                        color={colors.white} /> :
                    <Image source={IC_MENU}
                        style={{
                            width: DIMENS.px_25,
                            height: DIMENS.px_25,
                            tintColor: colors.white
                        }}
                        resizeMode={'contain'} />}

            </Ripple>

            <Text
                style={{
                    fontSize: DIMENS.txt_size_large,
                    color: colors.white,
                    fontFamily: FONT_FAMILIY.Roboto_Regular,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1, right: DIMENS.px_10
                }}>
                {header}
            </Text>
            {/* Here */}
            {isRightIcon ?
                <Ripple onPress={logOutPress} style={{
                    width: DIMENS.px_30, height: DIMENS.px_30, right: DIMENS.px_10,
                    position: 'absolute'
                }}
                onPress={rightProfilePress}>
                    <Image source={IC_MENU}
                        style={{
                            width: DIMENS.px_30,
                            height: DIMENS.px_30,
                            borderRadius: DIMENS.px_30 / 2
                        }}
                        source={AVTAR}
                        resizeMode={'cover'} />
                </Ripple>
                : null
            }
        </View>
    )




    // {isRightIcon ?
    //     isRightNoti ?
    //         <Ripple onPress={logOutPress} style={{
    //             width: DIMENS.px_30, height: DIMENS.px_30, right: DIMENS.px_0,
    //             position: 'absolute'
    //         }}>
    //             <Image
    //                 style={{
    //                     width: DIMENS.px_23,
    //                     height: DIMENS.px_25
    //                 }}
    //                 source={EVENT_MARKER}
    //                 resizeMode={'contain'}
    //             />
    //         </Ripple>
    //         :
    //         isRightPlusButton ?
    //             <View style={{
    //                 flexDirection: 'row',
    //                 right: DIMENS.px_10,
    //                 position: 'absolute'
    //             }}>
    //                 <Ripple onPress={onPressPlusButton} style={{
    //                     width: DIMENS.px_30, height: DIMENS.px_30,
    //                     marginLeft: DIMENS.px_15
    //                 }}>
    //                     <IconPlusButton
    //                         name={'pluscircleo'}
    //                         size={26}
    //                         color={colors.black} />
    //                 </Ripple>
    //             </View>
    //             :
    //             isRightLogout ?
    //                 <Ripple onPress={logOutPress} style={{
    //                     width: DIMENS.px_30, height: DIMENS.px_30, right: DIMENS.px_10,
    //                     position: 'absolute'
    //                 }}>
    //                     <IconLogout
    //                         name={'logout'}
    //                         size={28}
    //                         color={colors.color_accent_dark} />
    //                 </Ripple>
    //                 :
    //                 isRightTrade ?
    //                     <Ripple onPress={righTradePress} style={{
    //                         width: DIMENS.px_30, height: DIMENS.px_30, right: DIMENS.px_10,
    //                         position: 'absolute'
    //                     }}>
    //                         <IconTrade
    //                             name={'currency-eth'}
    //                             size={36}
    //                             color={colors.color_accent} />
    //                     </Ripple>
    //                     : null
    //     : null
    // }