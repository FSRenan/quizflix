import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginButton from '../Button/LoginButton'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton buttonTitle={'Login'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
