import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { useNavigation } from 'react-navigation';
import { DrawerActions , CommonActions} from '@react-navigation/native';




 class ButtonTest extends Component{

     render(navigation){ 
        const jumpToAction = DrawerActions.jumpTo('carte');
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({name: 'screenCarte'}))}>
                <Text style={styles.buttonText} >Connection</Text>
            </TouchableOpacity>
        );
    }}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'seagreen',
        borderRadius: 7,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20%',
        elevation: 8,
        borderWidth: 1,
        borderColor:'chartreuse'        
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
export default ButtonTest