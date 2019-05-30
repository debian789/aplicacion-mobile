import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeComponent from '../components/home/HomeComponent'
import HeaderStackNavigator from './HeaderStackNavigator'

export default createAppContainer(createSwitchNavigator({
 Home: {screen: HomeComponent},
 Dashboard: {screen: HeaderStackNavigator}
}));