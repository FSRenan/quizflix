import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { Button } from 'react-native-elements';
import backgroundNetflix from '../../images/fundoTelaLogin.png';
import loginWithFacebook from './FacebookAuth';
import { Font } from 'expo';

export default class LoginScreen extends React.Component {
  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      NetflixFont: require('../assets/NetflixFont.ttf'),
    });
    this.setState({ fontsAreLoaded: true });
  }

  render() {
    const { fontsAreLoaded } = this.state;
    let { firebase } = this.props;
    console.log(fontsAreLoaded);
    return (
      <React.Fragment>
        {fontsAreLoaded ? (
          <ImageBackground source={backgroundNetflix} style={styles.container}>
            <View>
              <Text style={styles.title}>QUIZFLIX</Text>
              <Button
                title="Logar com facebook"
                onPress={() => loginWithFacebook(firebase)}
                titleStyle={styles.buttonTitle}
                buttonStyle={styles.buttonFacebook}
              />
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="#FF0000" />
          </View>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'NetflixFont',
    fontSize: 88,
    color: 'red',
    textAlign: 'center',
    paddingBottom: 200,
    letterSpacing: 1,
  },
  buttonFacebook: {
    backgroundColor: 'rgba(92, 99,216, 1)',
    width: 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 80,
    fontSize: 48,
  },
  buttonTitle: {
    fontWeight: '700',
    fontSize: 48,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
});
