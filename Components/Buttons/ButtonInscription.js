import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default class ButtonInscription extends Component{
     render(){
    
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress} >
                <Text style={styles.buttonText} >Inscription</Text>
            </TouchableOpacity>
        );
    }}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'chartreuse',
        borderRadius: 7,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20%',
        elevation: 8,
        borderWidth: 1,
        borderColor:'seagreen',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});