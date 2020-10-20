import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ImageLogo from '../Images/Logo';
import ModalConnect from '../Components/Modals/ModalConnect';
import ModalInscription from '../Components/Modals/ModalInscription';

export default function ScreenHome (){
        return (
            <View style={{ ...styles.homeContainer }} >
                <View style={{ ...styles.backgroundBande }} ></View>
                <View style={{ ...styles.logoContainer }} >
                    <ImageLogo />
                </View>
                <View style={{ ...styles.buttonContainer }}>
                        <ModalConnect />
                        <ModalInscription />
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    backgroundBande: {
        position:'absolute',
        backgroundColor: 'whitesmoke',
        width:'50%',
        height:'100%',
    },
    logoContainer: {
        flex: 4,
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width:'80%'
    }
});