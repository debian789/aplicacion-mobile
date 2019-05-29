import React from 'react'
import {View, Text, Button} from 'react-native';


export default class WelcomeComponent extends React.Component {

    render() {
        debugger 
        return (<View>
            <Text>Hola, bienvenido, sabemos que quieres viajar en un ..... , por favor diligencia el siguiente formulario</Text>
            <Button title="Diligenciar" onPress={()=> {this.props.navigation.navigate('Form')}}></Button>
        </View>)
    }
}