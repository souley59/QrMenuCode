import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { TextInput, } from 'react-native-paper';
import { FontAwesome5} from '@expo/vector-icons';



export default class InputDateOfBirth extends Component {
    
    /*    setSurname = () => {
           this.setState({ surname: '' })
        } */
    render() {
        //const {surname} = this.setState;
        return (
            <TextInput  left={<TextInput.Icon  name ="calendar" color="seagreen"  style={{marginRight:20}} />}  error={false} label="Date de naissance" mode="outlined" dataDetectorTypes='calendarEvent' /* onChangeText={()=>this.setSurname(surname)} */ style={styles.inputDateOfBirth} theme={{ colors: { text: 'black', primary: 'green', } }} />
        )
    }
}
const styles = StyleSheet.create({
    inputDateOfBirth: {
        width: '100%',
        backgroundColor: 'mintcream',
        zIndex:2
    }
});