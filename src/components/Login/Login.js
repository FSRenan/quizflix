import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import LoginButton from '../Button/LoginButton'
import backgroundNetflix from '../../images/fundoTelaLogin.png'

export default class Login extends React.Component {
  render() {

    return (
        <ImageBackground style={styles.container} source={backgroundNetflix}>
          <LoginButton buttonTitle='Login' color='#4136B5'/>
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
