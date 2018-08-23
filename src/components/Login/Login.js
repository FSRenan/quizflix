import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import LoginButton from '../Button/LoginButton'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../images/fundoTelaLogin.png')} />
        <LoginButton  buttonTitle={'Login'}/>
      </View>
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
