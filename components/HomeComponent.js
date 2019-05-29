import React from 'react';
import { View, Button } from 'react-native';

export default  class HomeComponent extends React.Component {
    render() {
        return (<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <Button title="Boeing" onPress={()=>this.props.navigation.navigate('Welcome',{name: 'Boeing'})}></Button>
           <Button title="Airbus" onPress={()=>this.props.navigation.navigate('Welcome',{name: 'Airbus'})}></Button>
        </View>)
    }

}