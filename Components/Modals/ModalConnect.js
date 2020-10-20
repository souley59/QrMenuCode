import React, { Component } from "react";
import { Modal, StyleSheet, View } from "react-native";
import ButtonClose from '../Buttons/ButtonClose';
import ScreenConnexion from "../../Screens/ScreenConnexion";
import ButtonConnexion from "../Buttons/ButtonConnexion";

export default class ModalConnect extends Component {
state = {
        modalVisible: false
    };


    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    closeModaleVisible=()=> this.setState({ modalVisible: false });
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
                            <ScreenConnexion closeModalVisible={this.closeModalVisible} modalVisible={this.state.modalVisible} />
                        </View>
                    </View>
                </Modal>
                <ButtonConnexion onPress={() => { this.setModalVisible(true) }} />
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
        backgroundColor: 'rgba(255, 255, 255, .9)',
        borderRadius: 20,
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
    }
});