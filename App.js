import React from 'react';
import { View } from 'react-native';
import LoginScreen from './src/components/LoginScreen/LoginScreen';
import FirebaseConfig from './src/components/constants/FirebaseConfig';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAA9yiDCHy4-lb_tmGiQ2LSiHdrcuM3fOM',
  authDomain: 'quizflix-649eb.firebaseapp.com',
  databaseURL: 'https://quizflix-649eb.firebaseio.com',
  projectId: 'quizflix-649eb',
  storageBucket: 'quizflix-649eb.appspot.com',
  messagingSenderId: '68936384738',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  console.log('Iniciou firebase');
}

//Nao esta rodando----------------
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log('We are authenticated now!');
  }
});
//----------------------------------

export default class App extends React.Component {
  render() {
    return <LoginScreen firebase={firebase} />;
  }
}
