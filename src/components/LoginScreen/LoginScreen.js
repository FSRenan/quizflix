import React from "react";
<<<<<<< HEAD
import { StyleSheet, ImageBackground, Text,View } from "react-native";
import { Button } from "react-native-elements";
import backgroundNetflix from "../../images/fundoTelaLogin.png";
import LoginFacebook from "./LoginFacebook"



export default class LoginScreen extends React.Component {

  render() {
    return (
      <ImageBackground source={backgroundNetflix} style={styles.container}>
      <Button
        title="Logar com facebook"
        onPress={() => LoginFacebook.loginWithFacebook()}
        titleStyle={styles.buttonTitle}
        buttonStyle={styles.buttonFacebook}
      />
      </ImageBackground>
    );
=======
import { StyleSheet, ImageBackground, Text ,View } from "react-native";
import { Button } from "react-native-elements";
import backgroundNetflix from "../../images/fundoTelaLogin.png";
import LoginFacebook, {initFirebase} from "./LoginFacebook"
import * as firebase from "firebase";
import { Font } from "expo";

 const config = {
    apiKey: "AIzaSyAA9yiDCHy4-lb_tmGiQ2LSiHdrcuM3fOM",
    authDomain: "quizflix-649eb.firebaseapp.com",
    databaseURL: "https://quizflix-649eb.firebaseio.com",
    projectId: "quizflix-649eb",
    storageBucket: "quizflix-649eb.appspot.com",
    messagingSenderId: "68936384738"
  };
  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      console.log("We are authenticated now!");
    }
  
  });

export default class LoginScreen extends React.Component {

  state = {
    fontsAreLoaded: false,
  }

  async componentWillMount(){
    await Font.loadAsync({
      "NetflixFont" : require("../../assets/NetflixFont.ttf")
      })
    this.setState({ fontsAreLoaded: true })
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "1684751348317950",
      { permissions: ["public_profile"] }
    );
    if (type === "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log(error)
        });
    }
  }

  render() {

    const { fontsAreLoaded } = this.state

    //Operador ternario, colocar spinner enquanto não carrega tela
    {fontsAreLoaded 
    return (
      <ImageBackground source={backgroundNetflix} style={styles.container}>
        <View>
        <Text style={styles.title}>QUIZFLIX</Text>
        <Button
          title="Logar com facebook"
          onPress={()=>this.loginWithFacebook()}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonFacebook}
        />
      </View>
      </ImageBackground>
    );
    }
>>>>>>> master
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
<<<<<<< HEAD
    flexDirection: 'row',
  },
  rows: {
  
  },
  title: {
    fontFamily: "open-sans-bold"
=======
    flexDirection: "row",
  },
  title: {
    fontFamily: "NetflixFont",
    fontSize: 88,
    color: "red",
    textAlign: 'center',
    paddingBottom: 200,
    letterSpacing: 1,
>>>>>>> master
  },
  buttonFacebook: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 8,
<<<<<<< HEAD
    marginBottom: 80,
  },
  buttonTitle: {
    fontWeight: "700"
=======
    marginBottom: 80, 
    fontSize: 48   
  },
  buttonTitle: {
    fontWeight: "700",
    fontSize: 48
>>>>>>> master
  }
});
