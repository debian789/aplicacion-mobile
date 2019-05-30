import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native';
import WelcomeStyle from './Welcome.style'


export default class WelcomeComponent extends React.Component {
    render() {
        debugger 
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        return (<View style={WelcomeStyle.containerWelcome}> 
            <Text style={WelcomeStyle.message}>Hola, bienvenido, sabemos que quieres viajar en un {name} , por favor diligencia el siguiente formulario</Text>
            <TouchableOpacity style={WelcomeStyle.btnForm}  onPress={()=> {this.props.navigation.navigate('Form',{name:name})}}>
                <Text  style={WelcomeStyle.btnFormText}>Continuar</Text>
                </TouchableOpacity>
        </View>)
    }
}