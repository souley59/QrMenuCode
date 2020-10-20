import React, { Component } from "react";
import { Modal, StyleSheet, View } from "react-native";
import ButtonClose from '../Buttons/ButtonClose';
import ScreenInscription from '../../Screens/ScreenInscription';
import ButtonInscription from '../Buttons/ButtonInscription';

export default class ModalInscription extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                <Modal animationType="slide" transparent={true} visible={modalVisible} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.ButtonView}>
                                <ButtonClose onPress={() => { this.setModalVisible(false) }} />
                            </View>
                            <ScreenInscription/>
                        </View>
                    </View>
                </Modal>
                <ButtonInscription onPress={() => { this.setModalVisible(true) }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 20,
        paddingVertical: 70,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '95%',
        height: '95%'
    },
    ButtonView:{
        position:'absolute',
        right: 10,
        top: 10,
        zIndex:2
    }
});