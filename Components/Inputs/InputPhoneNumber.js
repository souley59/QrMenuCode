import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
/* import { TextInput, } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/MaterialIcons'; */

export default class InputPhoneNumber extends Component {
 
 
    setNum = () => {
        this.setState({ num: '' })
    } 
    render() {
        const { num } = this.setState;
        return (
            <View style={{...styles.container}} >
 {/*                <TextInput {...this.props.phone} label="Téléphone" keyboardType={'number-pad'} mode="outlined" value={num} onChangeText={() => this.setNum(num)} style={styles.inputPhoneNumber} theme={{ colors: { text: 'black', primary: 'green', } }}
                    render={props =>
                        <TextInputMask
                            {...props}
                            mask="[00] [00] [00] [00] [00]" 
                        />
                    }
                />
                <Icon style={styles.icon} name={this.state.phone} size={this.props.iconSize} color={this.props.iconColor} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    inputPhoneNumber: {
        width: '100%',
        backgroundColor: 'mintcream'

    },
    icon: {
		position: 'absolute',
		top: 20,
        right: 10,
        fontSize:25
	},
});