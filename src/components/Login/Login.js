import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import LoginButton from '../Button/LoginButton'

export default class Login extends React.Component {
  render() {
    return (
        <ImageBackground style={styles.container} source={require('../../images/fundoTelaLogin.png')}>
          <LoginButton  buttonTitle={'Login'}/>
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
