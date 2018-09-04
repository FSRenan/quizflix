import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from 'firebase'
<<<<<<< HEAD
import FirebaseConfig from '../constants/FirebaseConfig'


firebase.initializeApp(FirebaseConfig.config);
  
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      console.log("We are authenticated now!");
    }
  
  });

export default class LoginFacebook extends React.Component {
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
=======

 




export default class LoginFacebook extends React.Component {
  
   
>>>>>>> master
}

