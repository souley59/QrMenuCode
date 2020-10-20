import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonConnexion from '../Components/Buttons/ButtonConnexion';
import ButtonPasswordForget from '../Components/Buttons/ButtonPasswordForget';
import InputEmail from '../Components/Inputs/InputEmail';
import InputPassword from '../Components/Inputs/InputPassword';
import { withNavigation } from 'react-navigation';

 function ScreenConnexion ({navigation}){

    function combined(){
        //this.closeModaleVisible()
         navigation.navigate('BurgerNavigation');
    }  
        return (
            <View style={{ ...styles.container }} >
                <View style={{ ...styles.inputContainer }} >
                    <InputEmail />
                    <View style={{ ...styles.passwordContainer }} >
                    <InputPassword />
                    <ButtonPasswordForget />
                    </View>
                </View>
                <View style={{ ...styles.buttonContainer }}>
                    <ButtonConnexion onPress={() => combined()}/>
                </View>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width:'100%',
        paddingVertical: '15%'
    },
    inputContainer: {
        flex: 4,
        justifyContent: 'space-evenly',
        width: '90%',
        padding:'5%', 
    },
    passwordContainer:{
        width: '100%', 
        alignItems: 'center',
    },
        buttonContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '80%'
    },
});
export default withNavigation(ScreenConnexion);