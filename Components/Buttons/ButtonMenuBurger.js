import React  from "react";
import { StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function combined(props) {
    props.navigation.openDrawer();
    Keyboard.dismiss();
}

function ButtonMenuBurger (props) {
    return (
        <TouchableOpacity style={styles.headerStyle} onPress={() => combined(props)}>
            <MaterialCommunityIcons name="hamburger" size={50} color="seagreen" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        marginLeft: 20,
        position: 'absolute',
        top: '5%',
        left: '0%'
    }
});
export default ButtonMenuBurger;