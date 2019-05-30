import React from 'react'
import {View, Text, ToastAndroid, TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const DataForm = t.struct({
    name: t.Str,
    email:t.Str,
    phone: t.Num,
    age: t.Num
})

const options =  {
    fields: {
        name: {
            error: "Campo requerido"
        },
        email: {
            error: "Campo requerido"
        },
        phone: {
            error: "Campo requerido"
        },
        age: {
            error: "Campo requerido"
        },
    }
}

import FormStyle from './Form.style'

export default class FormComponent extends React.Component {

    handleSubmit = () => {
        if (this.refs.form.getValue()) {
            //TODO: Modificar por la url del servidor 
            fetch('http://192.168.1.108:3000/create',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.refs.form.getValue())
            })
            .then((response) => {
                ToastAndroid.show('Información procesada', ToastAndroid.SHORT)
            })
            .catch((error) => {
                ToastAndroid.show('No se pudo procesar la información', ToastAndroid.SHORT)
               // ToastAndroid.show(error, ToastAndroid.SHORT)
            })
        }
       
    }


    render() {
        return (<View style={FormStyle.containerForm}>
            <Text> este es el formulario </Text>
            <Form 
                ref="form"
                type = {DataForm}
                options = {options}
            />

            <TouchableOpacity 
                onPress={this.handleSubmit}
            >
                <Text>Enviar</Text>
            </TouchableOpacity>

            </View>)
    }
}