import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Provider, Divider, Menu } from 'react-native-paper';
import Constants from 'expo-constants';


class InputGenre extends Component {
    state = {
        visible: false,
        gender: 'Femme'
    }

    _handleOpenMenu = () => this.setState({ visible: true });
    _handleCloseMenu = () => this.setState({ visible: false });
    _handlePressFemale = () => this.setState({ gender: 'Femme', visible: false });
    _handlePressMale = () => this.setState({ gender: 'Homme', visible: false });

    render() {
        const iconLeft = <TextInput.Icon name="human-greeting" color="seagreen" style={{ marginRight: 20 }} />;
        const iconRight = <TextInput.Icon name="menu-down" color="seagreen" size={60} style={{ right:10 }} onPress={this._handleOpenMenu} />;

        return (
            <Provider  >
                <View style={styles.container}>
                    <Menu style={{height:200, top:10}} visible={this.state.visible} onDismiss={this._handleCloseMenu} anchor={
                        <TextInput onChange={this._handleOpenMenu} value={this.state.gender} label="Genre" left={iconLeft} right={iconRight} mode="outlined" keyboardType={'default'} style={styles.inputGenre} theme={{ colors: { text: 'black', primary: 'seagreen', } }} />}>
                        <Menu.Item onPress={this._handlePressFemale} title="Femme" icon="human-female" />
                        <Divider />
                        <Menu.Item onPress={this._handlePressMale} title="Homme" icon="human-male" />
                    </Menu>
                </View>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    inputGenre: {
        width: '100%',
        height: 60,
        backgroundColor: 'mintcream',
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        width:'100%'
      },
});
export default InputGenre;