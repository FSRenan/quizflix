import React from "react";
import { StyleSheet, ImageBackground, Text,View } from "react-native";
import { Button } from "react-native-elements";
import backgroundNetflix from "../../images/fundoTelaLogin.png";
import * as firebase from "firebase";
import { Font } from 'expo';

const config = {
  apiKey: "AIzaSyAA9yiDCHy4-lb_tmGiQ2LSiHdrcuM3fOM",
  authDomain: "quizflix-649eb.firebaseapp.com",
  databaseURL: "https://quizflix-649eb.firebaseio.com",
  projectId: "quizflix-649eb",
  storageBucket: "quizflix-649eb.appspot.com",
  messagingSenderId: "68936384738"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

export default class LoginScreen extends React.Component {

  state = {
    fontLoaded: false,
  }

  componentBeforeMount() {
    Font.loadAsync({
      'open-sans-bold': require('../../assets/NetflixFont.ttf'),
    });
    this.setState({ fontLoaded: true });
  } 


  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "1684751348317950",
      { permissions: ["public_profile"] }
    );
    

    if (type === "success") {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log(error)
        });
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundNetflix} style={styles.container}>

      {  this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'open-sans-bold', fontSize: 56 }}>
        Quizflix
      </Text>
      ) : null}
    

      <Button
        title="Logar com facebook"
        onPress={() => this.loginWithFacebook()}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonFacebook}
      />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: 'row',
  },
  rows: {
  
  },
  title: {
    fontFamily: "open-sans-bold"
  },
  buttonFacebook: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 80,
  },
  buttonTitle: {
    fontWeight: "700"
  }
});
