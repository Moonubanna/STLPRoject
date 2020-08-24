import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View, Image,ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../theme'
import { LOGO, SPLASH_IMAGE } from '../images'
import { retrieveData } from '../common/AsyncStorage'



import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { KEY, SCREEN, DIMENS } from '../constants';
import NavigationService from '../NavigationService';


export class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {

    setTimeout(() => {
      
      retrieveData(KEY.USER_DATA,result=>{
        if(result!=undefined&&result){
          NavigationService.clearStack('Drawer')
        }else{
          NavigationService.clearStack(SCREEN.LOGIN);
        }
      })
    }, 2000);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View 
      style={{
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        width: '100%',
        backgroundColor:colors.color_primary_dark
      }}>
        <Image source={LOGO} style={{ resizeMode: 'contain', width: 250, height: 200 }} />
        <ActivityIndicator 
        color={colors.white} size="large"
        style={{
          marginTop:DIMENS.px_20
        }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red'
  },
});