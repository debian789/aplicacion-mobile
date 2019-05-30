import React from 'react'
import {View, ScrollView, Text, ToastAndroid, TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

import FormStyle from './Form.style'

const DataForm = t.struct({
    name: t.Str,
    email:t.Str,
    celular: t.Num,
    edad: t.Num
})


const styleFormDefault = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
          marginBottom: 10
        },
        error: {
          marginBottom: 10
        }
      },
    controlLabel: {
        normal: {
          marginBottom: 7
        },
      error: {
          marginBottom: 7,
        }
      }
    }

const options =  {
    fields: {
        name: {
            error: "Campo requerido"
        },
        email: {
            error: "Campo requerido"
        },
        celular: {
            error: "Campo requerido"
        },
        edad: {
            error: "Campo requerido"
        },
    },
    stylesheet: styleFormDefault
}


export default class FormComponent extends React.Component {
    constructor(props) {
        super(props)
         //TODO: Modificar por la url del servidor
        this.url = 'http://192.168.1.108:3000/create'
    }

    // Permite validar el rango de edad por defecto
    validateAge(age) {
        console.log(age)
        if(age && (age > 18 && age <= 100)) {
            return true
        } else {
            return false
        }
    }
    // Gestiona el evento de enviar del formulario
    handleSubmit = () => {
        if (this.refs.form.getValue()) {
            if (this.validateAge(this.refs.form.getValue().edad)) {
                
                fetch(this.url,{
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
                })
            } else {
                ToastAndroid.show('La edad debe estar entre 18 a 100 años', ToastAndroid.SHORT)
            }
           
        }
       
    }


    render() {
        return (<ScrollView style={FormStyle.containerForm}>
            <Form 
                ref="form"
                type = {DataForm}
                options = {options}
            />

            <TouchableOpacity 
                style={FormStyle.submit}
                onPress={this.handleSubmit}
            >
                <Text style={FormStyle.textSumit}>Enviar</Text>
            </TouchableOpacity>

            </ScrollView>)
    }
}