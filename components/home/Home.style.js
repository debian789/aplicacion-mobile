import {StyleSheet} from 'react-native'
export default StyleSheet.create({
  
    containerMenu: {
        flex: 1, 
        
        alignItems:'center', 
        justifyContent:'center'
    },
    btnMenu: {        
        borderColor: '#00ACEE',
        borderLeftWidth: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginVertical: 20
    },
    txtMenu:  {
        fontSize: 25,
    },
    icons: {
        paddingHorizontal: 10
    }
})