import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    containerWelcome: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        alignItems:'center', 
        justifyContent:'center'
    },
    message: {
        justifyContent:'center',
        alignItems: 'center',
        fontSize: 25,
        padding: 10,
        textAlign: 'center'
    },
    btnForm: {
        borderColor: '#00ACEE',
        borderBottomWidth: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginVertical: 20
    },
    btnFormText: {
        fontSize: 25,
    }
})