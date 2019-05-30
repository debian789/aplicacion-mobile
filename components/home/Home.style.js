import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  
    containerMenu: {
        flex: 1, 
        flexDirection: 'column',
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: '#36485f',
    },
    btnMenu: {        
        borderColor: '#00ACEE',
        borderBottomWidth: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        marginVertical: 20,
        marginHorizontal: 10
    },
    txtMenu:  {
        fontSize: 25,
    },
    icons: {
        paddingHorizontal: 10
    }
})