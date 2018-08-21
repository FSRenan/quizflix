import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Button/Button'

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button buttonName='Login'/>
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
