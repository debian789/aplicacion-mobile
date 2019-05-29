
import {createDrawerNavigator} from 'react-navigation'

// import DashboardComponent from '../components/DashboardComponent';
import HeaderStackNavigator from './HeaderStackNavigator';


export default createDrawerNavigator({
    Dashboard: {screen: HeaderStackNavigator},
    Dashboard2: {screen: HeaderStackNavigator}
})