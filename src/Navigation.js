import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator,headerShown } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

//AUTH SCREEN
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import OTPVerification from './containers/Auth/OTPVerification'
import { navigationHeader } from './theme'
//Drawer Screens
import Dashboard from './containers/Screens/Dashboard';

//Back Screens
 import Objects from './containers/Screens/Objects'
//  STL COURSES 
 import STLCourseSelection from './containers/Screens/STLCourseSelection'
 import STLCourseList from './containers/Screens/STLCourseList'
 import STLCourseTandC from './containers/Screens/STLCourseTandC'
 import STLCoursePay from './containers/Screens/STLCoursePay'
 import STLCoursePrograms from './containers/Screens/STLCoursePrograms'
 import STLCourseProgramsPlay from './containers/Screens/STLCourseProgramsPlay'
//  STL PREMIUM CLUB
import STLPremiumClub from './containers/Screens/STLPremiumClub'
// download stl my course
import STLMyCourse from './containers/Screens/STLMyCourse'
import STLYoutubeVideos from './containers/Screens/STLYoutubeVideos'
import OurYoutubeVideos from './containers/Screens/OurYoutubeVideos'
import STLFreeMarketSug from './containers/Screens/STLFreeMarketSug'
//exclusive live events
import ExclusiveLiveEvents from './containers/Screens/ExclusiveLiveEvents'
import ExclusiveLiveTCondition from './containers/Screens/ExclusiveLiveTCondition'
import ExclusivelivePay from './containers/Screens/ExclusivelivePay'
import ExclusiveLiveEventDetail from './containers/Screens/ExclusiveLiveEventDetail'

//DEMATE ACCOUNT LINK LIST
import DemateLinksList from './containers/Screens/DemateLinksList'
import DemateAccountDetail from './containers/Screens/DemateAccountDetail'

//REFFER
import PartnerCode from './containers/Screens/PartnerCode'
import MyEarning from './containers/Screens/MyEarning'
//profile
import MyProfile from './containers/Screens/MyProfile'
import CommonPages from './containers/Screens/CommonPages'

 import CustomDrawer from './common/CustomDrawer';
 import { AuthLoadingScreen } from './common/AuthLoadingScreen';

const DrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions:{
      // drawerLockMode:'locked-closed',
      // gesturesEnabled:'false'
    },
  },
 
},{
  initialRouteName:'Dashboard',
  contentComponent:CustomDrawer

});
const AppNavigator1 = createStackNavigator({
  Login:{screen:Login, navigationOptions:{headerShown:false}},
  Signup:{screen:Signup, navigationOptions:{headerShown:false}},
  OTPVerification:{screen:OTPVerification, navigationOptions:{headerShown:false}},
  // Back screens
  Objects:{screen: Objects,navigationOptions:{headerShown:false}},
  STLCourseSelection:{screen: STLCourseSelection,navigationOptions:{headerShown:false}},
  STLCourseList:{screen: STLCourseList,navigationOptions:{headerShown:false}},
  STLCourseTandC:{screen: STLCourseTandC,navigationOptions:{headerShown:false}},
  STLCoursePay:{screen: STLCoursePay,navigationOptions:{headerShown:false}},
  STLCoursePrograms:{screen: STLCoursePrograms,navigationOptions:{headerShown:false}},
  STLCourseProgramsPlay:{screen: STLCourseProgramsPlay,navigationOptions:{headerShown:false}},
  STLPremiumClub:{screen: STLPremiumClub,navigationOptions:{headerShown:false}},
  STLMyCourse:{screen: STLMyCourse,navigationOptions:{headerShown:false}},
  STLYoutubeVideos:{screen: STLYoutubeVideos,navigationOptions:{headerShown:false}},
  OurYoutubeVideos:{screen: OurYoutubeVideos,navigationOptions:{headerShown:false}},
  STLFreeMarketSug:{screen: STLFreeMarketSug,navigationOptions:{headerShown:false}},
  ExclusiveLiveEvents:{screen: ExclusiveLiveEvents,navigationOptions:{headerShown:false}},
  ExclusiveLiveTCondition:{screen: ExclusiveLiveTCondition,navigationOptions:{headerShown:false}},
  ExclusivelivePay:{screen: ExclusivelivePay,navigationOptions:{headerShown:false}},
  ExclusiveLiveEventDetail:{screen: ExclusiveLiveEventDetail,navigationOptions:{headerShown:false}},

  DemateLinksList:{screen: DemateLinksList,navigationOptions:{headerShown:false}},
  DemateAccountDetail:{screen: DemateAccountDetail,navigationOptions:{headerShown:false}},

  PartnerCode:{screen: PartnerCode,navigationOptions:{headerShown:false}},
  MyEarning:{screen: MyEarning,navigationOptions:{headerShown:false}},
  MyProfile:{screen: MyProfile,navigationOptions:{headerShown:false}},
  CommonPages:{screen: CommonPages,navigationOptions:{headerShown:false}},
  Drawer:{
    screen:DrawerNavigator,
    navigationOptions: {
      headerShown: false,
    }
  }
}, 
{
  initialRouteName: 'Login',
  defaultNavigationOptions: navigationHeader,
  // defaultNavigationOptions: null,
  headerMode:'none',

});
const AppNavigator = (createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AppStack: AppNavigator1,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));



 
export default createAppContainer(AppNavigator)
