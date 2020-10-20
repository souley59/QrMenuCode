import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default class ImageLogo extends React.Component{
    render(){
    return (
        <View style={{...styles.container }} >
            <MaterialCommunityIcons name="qrcode-edit"  style={styles.qrImage} />
            <MaterialIcons name="restaurant-menu"  style={styles.cookImage} />
        </View>
    );
}
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'chartreuse', 
        transform: [{ rotate: '45deg' }], 
        borderRadius:30, borderWidth:2, 
        borderColor:'seagreen',
        elevation:15
    },
    qrImage: {
        position: 'absolute',
        left: 30,
        top: 90,
        transform: [{ translateX: 65},{translateY: 5}],
        backgroundColor:'white',
        fontSize: 60,
        color:"black", 
        elevation:8
    },
    cookImage: {
        fontSize: 140,
        justifyContent: 'flex-end',
        transform: [{ rotate: '-45deg' },{ translateX: 0},{translateY: -20}],
        margin: 20,
        color:'black',
        elevation:8
    },
});