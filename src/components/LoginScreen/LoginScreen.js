import React from "react";
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
