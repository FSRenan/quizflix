import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Button } from "react-native-elements";
import backgroundNetflix from "../../images/fundoTelaLogin.png";
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAA9yiDCHy4-lb_tmGiQ2LSiHdrcuM3fOM",
  authDomain: "quizflix-649eb.firebaseapp.com",
  databaseURL: "https://quizflix-649eb.firebaseio.com",
  projectId: "quizflix-649eb",
  storageBucket: "quizflix-649eb.appspot.com",
  messagingSenderId: "68936384738"
};

firebase.initializeApp(config);

async function loginWithFacebook() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '1684751348317950',
    { permissions: ['public_profile'] }
  );

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase.auth().signInWithCredential(credential).catch((error) => {
      // Handle Errors here.
    });
  }
}

export default class LoginScreen extends React.Component {

  render() {
    return (
      <ImageBackground source={backgroundNetflix} style={styles.container} >
        <Button
          title="Logar com facebook"
          onPress={()=>this.loginWithFacebook()}
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 8
          }}
        />
      </ImageBackground>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
