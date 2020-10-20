import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default class ButtonPasswordForget extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer} >
                <Text style={{ textAlign: 'right', }} >Mot de passse oublié?</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 15,
        width:"100%",
    },
    buttonText: {
        color: 'seagreen',
        fontSize: 20,
        fontWeight: 'bold',
    },
});