import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeComponent from '../components/home/HomeComponent'

// import MenuDrawerNavigator from './MenuDrawerNavigator'
import HeaderStackNavigator from './HeaderStackNavigator'
// import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
 // Main: MainTabNavigator,
 Home: {screen: HomeComponent},
 Dashboard: {screen: HeaderStackNavigator}
}));