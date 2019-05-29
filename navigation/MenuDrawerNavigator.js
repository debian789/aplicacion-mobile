
import {createDrawerNavigator} from 'react-navigation'

import DashboardComponent from '../components/DashboardComponent';


export default createDrawerNavigator({
    Dashboard: {screen: DashboardComponent}
})