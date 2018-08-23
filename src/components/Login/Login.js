import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import LoginButton from '../Button/LoginButton'

export default class Login extends React.Component {
  render() {
    const backgroundNetflix = require('../../images/fundoTelaLogin.png');

    return (
        <ImageBackground style={styles.container} source={backgroundNetflix}>
          <LoginButton buttonTitle='Login'/>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
