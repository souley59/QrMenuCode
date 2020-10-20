import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';

export default class ButtonClose extends Component{
 

     render(){
    
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress} >
                <MaterialCommunityIcons name='close-box' style={{...styles.buttonIcon}} />
            </TouchableOpacity>
        );
    }}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation:8,      
    },
    buttonIcon: {
        fontSize: 40,
        color:'seagreen'
 
    },
});