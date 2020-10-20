import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { TextInput, } from 'react-native-paper';

export default class InputAge extends Component {
        setAge = () => {
           this.setState({ age: 0 })
        } 
         
    render() {
        const {age} = this.setState;
        return (
            <TextInput left={<TextInput.Icon  name ="timer" color="seagreen"  style={{marginRight:20}} />} maxLength={2} label="Age" mode="outlined" keyboardType={'number-pad'}  onChangeText={()=>this.setAge(age)}  style={styles.inputAge} theme={{ colors: { text: 'black', primary: 'green',}  }} />
        )
    }
}
const styles = StyleSheet.create({
    inputAge: {
        width: '100%',
        backgroundColor:'mintcream'                
    }
});