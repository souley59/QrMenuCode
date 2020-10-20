import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default class ButtonConnexion extends Component{
 
     render(){ 
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress} >
                <Text style={styles.buttonText} >Connexion</Text>
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