import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import {  TextInput } from 'react-native-paper';

export default class InputPassword extends React.Component {

		state = {
			icEye: 'eye-off',
			password: true,
			isValid: null
		}
	
	_handleVisibilityPassword = () => {	

		this.setState(prevState=>({	
				icEye: prevState.icEye === 'eye' ? 'eye-off': 'eye',
				password: !prevState.password
			}));
		}
	
	render() {
		const test = this.state.icEye
		const iconRight = <TextInput.Icon name={test} onPress={this._handleVisibilityPassword} />
		const iconLeft = <TextInput.Icon  name ="lock" color="seagreen"  style={{marginRight:20}} />
		return (
			
			<View style={{...styles.container}} >
				<TextInput secureTextEntry={this.state.password} left={iconLeft} right={iconRight} {...this.props} label='Mot de passe' mode="outlined" secureTextEntry={this.state.password}  style={{ ...styles.inputName, }} theme={{ colors: { text: 'black', primary: 'green' } }} />
			
			</View>
		);
	}
}
export const styles = StyleSheet.create({

	icon: {
		position: 'absolute',
		top: 22,
		right: 10,
		padding:40,
	},
	inputName: {
		backgroundColor: 'mintcream',
	},
	input: {
		paddingLeft:15,
		marginTop:8,
		fontSize: 16,
	  },
	  container:{
		  width:'100%'
	  }
});

InputPassword.defaultProps = {
	iconSize: 25,
	label: 'Password',
};
