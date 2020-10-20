import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonMenuBurger from '../Components/Buttons/ButtonMenuBurger';

function ScreenMaReservation ({navigation} ){
    

        return (
            <View style={{ ...styles.container }} >
                <ButtonMenuBurger  navigation={navigation}  />
                <Text>reservation</Text>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },  
});
export default ScreenMaReservation;