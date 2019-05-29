import {createStackNavigator, HeaderBackButton} from 'react-navigation';
import FormComponent from '../components/FormComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default createStackNavigator({
    Form: {screen: FormComponent},
    Welcome: {
        screen: WelcomeComponent, 
        navigationOptions: ({navigation}) => {
            let name  = '';
            
            if (navigation && navigation.state && navigation.state.params  && navigation.state.params.name)  {
                name = navigation.state.params.name
            }
            return {
            title: `${name || ''}`,
            headerLeft: (
                <Icon 
                    style= {{paddingLeft: 10}}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
                )
            // headerBackButton: null
        }
    }}
}, {

    initialRouteName: 'Welcome',
   /* defaultNavigationOptions: ({navigation}) => {
        return {
            headerLeft: (
            <Icon 
                style= {{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={30}
            />
            )
    }
    }*/
})