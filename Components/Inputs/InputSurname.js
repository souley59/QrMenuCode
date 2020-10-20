import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { TextInput, } from 'react-native-paper';

export default class InputSurname extends Component {
    setSurname = () => {
        this.setState({ surname: '' })
    }
    render() {
        const { surname } = this.setState;
        const pen = <TextInput.Icon  name ="pen" color="seagreen"  style={{marginRight:20}} />

        return (
            <TextInput label="Prénom" mode="outlined" value={surname} left='pen' onChangeText={() => this.setSurname(surname)} style={styles.inputSurname} theme={{ colors: { text: 'black', primary: 'green' } }} />
        )
    }
}

const styles = StyleSheet.create({
    inputSurname: {
        width: '100%',
        backgroundColor: 'mintcream'
    }
});
