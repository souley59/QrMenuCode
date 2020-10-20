import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, } from 'react-native';
import ButtonInscription from '../Components/Buttons/ButtonInscription';
import InputAge from '../Components/Inputs/InputAge';
import InputDateOfBirth from '../Components/Inputs/InputDateOfBirth';
import InputEmail from '../Components/Inputs/InputEmail';
import InputGenre from '../Components/Inputs/InputGenre';
import InputName from '../Components/Inputs/InputName';
import InputPassword from '../Components/Inputs/InputPassword';
import InputPhoneNumber from '../Components/Inputs/InputPhoneNumber';
import InputSurname from '../Components/Inputs/InputSurname';

export default class ScreenInscription extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <View style={{ ...styles.containerScoll }} >
                        <InputName />
                        <InputSurname />
                        <View style={{ width: '100%',marginTop: 25 }}>
                        <InputAge />
                        <InputDateOfBirth />
                        </View>
                        <View style={{ width: '100%',marginBottom: 25 }}>
                            <InputGenre />
                        </View>
                        <InputPhoneNumber />
                        <InputEmail />
                        <InputPassword />
                        <InputPassword />
                    </View>
                    <View style={{ ...styles.buttonContainer }}>
                        <ButtonInscription />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerScoll: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingVertical: '15%',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '10%'
    }
});