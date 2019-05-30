import {createStackNavigator, HeaderBackButton} from 'react-navigation';
import FormComponent from '../components/form/FormComponent';
import WelcomeComponent from '../components/welcome/WelcomeComponent';
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

export default createStackNavigator({
    Form: {screen: FormComponent,
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
                 //   onPress={() => navigation.openDrawer()}
                 onPress = {()=> {navigation.navigate('Welcome', {name: name})}}
                    name="md-arrow-round-back"
                    size={30}
                />
            )
            // headerBackButton: null
        }
    }
},
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
                 //   onPress={() => navigation.openDrawer()}
                 onPress = {()=> {navigation.navigate('Home')}}
                    name="md-arrow-round-back"
                    size={30}
                />
            )
            // headerBackButton: null
        }
    }}
}, {

   // initialRouteName: 'Welcome',
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