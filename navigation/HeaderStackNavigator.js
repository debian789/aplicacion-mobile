import {createStackNavigator, HeaderBackButton} from 'react-navigation';
import FormComponent from '../components/FormComponent';
import WelcomeComponent from '../components/WelcomeComponent';


export default createStackNavigator({
    Form: {screen: FormComponent},
    Welcome: {
        screen: WelcomeComponent, 
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}`,
            headerBackButton: null
    })}
}, {
    initialRouteName: 'Welcome'
})