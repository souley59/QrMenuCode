import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

export default class InputEmail extends Component {
    state = {
        email: ''
    };
    render() {
        const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email);
        const iconLeft = <TextInput.Icon name="email" color="seagreen" style={{ marginRight: 20 }} />;
        return (
            <View style={{ ...styles.containerEmail }} >
                <TextInput label="Email" mode="outlined" left={iconLeft} autoCompleteType='email' keyboardType='email-address' onChangeText={email => this.setState({ email })} style={styles.inputEmail} theme={{ colors: { text: 'black', primary: 'green', } }} />
                <HelperText type="error" visible={!emailValid}>
                    Adresse email non valide!
      </HelperText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputEmail: {
        width: '100%',
        height: 60,
        backgroundColor: 'mintcream',
    },
    containerEmail: {
        width: '100%',
        zIndex: 2
    }
});