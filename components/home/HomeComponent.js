import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HomeStyle from './Home.style'
import Icon from '@expo/vector-icons/Ionicons'

export default  class HomeComponent extends React.Component {
    render() {
        return (<View style={HomeStyle.containerMenu}>
           <TouchableOpacity  style={HomeStyle.btnMenu}
            onPress={()=>this.props.navigation.navigate('Welcome',{name: 'Boeing'})}>
                <Icon style={HomeStyle.icons} name="md-airplane" size={30} ></Icon><Text style={HomeStyle.txtMenu}> Boeing</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={HomeStyle.btnMenu}
            onPress={()=>this.props.navigation.navigate('Welcome',{name: 'Airbus'})}>
                <Icon style={HomeStyle.icons} name="md-airplane" size={30} ></Icon><Text style={HomeStyle.txtMenu}> Airbus</Text>
            </TouchableOpacity>


        </View>)
    }

}