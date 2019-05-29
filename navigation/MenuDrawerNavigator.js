
import {createDrawerNavigator} from 'react-navigation'

// import DashboardComponent from '../components/DashboardComponent';
import HeaderStackNavigator from './HeaderStackNavigator';


export default createDrawerNavigator({
    Boeing: {screen: HeaderStackNavigator},
    Airbus: {screen: HeaderStackNavigator}
})