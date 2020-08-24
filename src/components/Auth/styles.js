import { StyleSheet,Dimensions} from 'react-native'

import { colors } from '../../theme'
import {DIMENS,WIDTH,HEIGHT
} from '../../constants'

//const {width,height}= Dimensions.get('screen')

export default StyleSheet.create({

  topView: {
    backgroundColor: colors.white,
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white
  },
  formControlView: {
    paddingBottom: 5,
    paddingHorizontal: 16,
    width: '100%',
    marginTop:DIMENS.px_10
  },
  formControlWithoutWithView: {
    paddingBottom: 5,
    paddingLeft: 10,
    marginTop:DIMENS.px_10
  },
  header: {
    color: colors.label,
    
    //fontSize: DIMENS.px_15,
  },
  label: {
    color: colors.label,
    fontSize: 13,
    opacity: 0.5,
    paddingBottom: 11,
   // fontFamily:FONT_FAMILIY.Roboto_Bold
  },
  textInput: {
    backgroundColor: colors.transparent,
    borderBottomColor: colors.gray,
   // borderRadius: 4,
   borderBottomWidth: 1,//StyleSheet.hairlineWidth,
    color: colors.white,
   // elevation: 3,
    fontSize: 20,
    paddingHorizontal: 10,
  // paddingVertical: 10,
    shadowColor: colors.inputShadow,
  //  shadowOffset: { height: 4, width: 0 },
   // shadowOpacity: 1,
   // shadowRadius: 2,
  },
  textInputActive: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    color: colors.black,
    elevation: 14,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: colors.primaryDisabled,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
    
  },

  submitBtn: {
    backgroundColor: colors.color_accent_dark,
    borderRadius: 2,
    justifyContent: 'center',
    marginTop:DIMENS.px_80,
    //marginHorizontal:DIMENS.px_5
  },
  categoryRoundBtn:{
    backgroundColor: colors.lightGrayText,
    borderRadius: DIMENS.px_20,
    paddingVertical:DIMENS.px_10,
    marginHorizontal:DIMENS.px_15,marginTop:DIMENS.px_5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  submitBtnDisabled: {
    backgroundColor: colors.primaryDisabled
  },
  submitBtnText: {
    color: colors.gray,
    fontSize: DIMENS.txt_size_large,
    fontWeight:'bold',
    padding:DIMENS.px_15,
    textAlign:'center'
   // fontWeight: '600',
   // lineHeight: 20,
  },
  headerText:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:DIMENS.txt_size_large,

  },
  catImg:
  {
    width:DIMENS.cat_img_width,
    height:DIMENS.cat_img_height,
    resizeMode:'contain', 
    borderRadius:DIMENS.cat_img_width/2,

   
 //   borderWidth:4,borderColor:'red'
 backgroundColor:colors.imgBackground,
  },
  catImgBackgroundView:
  {
    borderRadius:DIMENS.cat_img_width/2,
    width:DIMENS.cat_img_width,height:DIMENS.cat_img_height,
    alignItems:'center',justifyContent:'center',
    backgroundColor:colors.imgBackground,
    overflow: 'hidden',
    
  
   // borderWidth:4,borderColor:'red'
  },
  homePageTitle:{
     marginHorizontal: 
     DIMENS.px_10, fontSize: 
     DIMENS.txt_size_large, 
     color: colors.primary, 
     //fontFamily: FONT_FAMILIY.Roboto_Regular, 
    fontWeight: '100',
    flex:.95
   },
   productImgView:{
     width:WIDTH/2-10,
   },
   viewBtn:
   {
     marginTop:DIMENS.px_10,
    width:88
  },
  catTitle:
  {
    color:colors.black,
    fontSize:DIMENS.txt_size_medium_14,
    //fontFamily:FONT_FAMILIY.Roboto_Medium
 },  
   
})