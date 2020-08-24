import { combineReducers } from 'redux'

import app from './app'
import Signup from './Signup'
import Login from './Login'
import  Dashboard from './Dashboard'
import  MyProfile from './MyProfile'
import  DemateLinksList from './DemateLinksList'
import  DemateAccountDetail from './DemateAccountDetail'


export default combineReducers({
  app, Signup, Login,Dashboard, MyProfile, DemateLinksList, DemateAccountDetail
})