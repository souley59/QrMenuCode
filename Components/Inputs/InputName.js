import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';
import { HelperText, TextInput, } from 'react-native-paper';

export default class InputName extends Component {
    setNom = () => {
        this.setState({ nom: ''})
     }

render(){
    const {nom} = this.setState;
    const pen = <TextInput.Icon  name ="pen" color="seagreen"  style={{marginRight:20}} />

    return (
        <View style={{width:'100%'}}>
        <TextInput  left={pen}  label="Nom" maxLength={15} mode="outlined" value={nom} onChangeText={()=>this.setNom(nom)} style={styles.inputName} theme={{colors:{text:'black', primary: 'green'}}} />
    </View>
        )
}}

const styles = StyleSheet.create({
    inputName: {
        width: '100%',
        backgroundColor:'mintcream'
             
    }
});