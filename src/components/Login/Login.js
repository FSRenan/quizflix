import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import LoginButton from "../Button/LoginButton";
import { Button } from "react-native-elements";
import backgroundNetflix from "../../images/fundoTelaLogin.png";

export default class Login extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={backgroundNetflix}>
        <Button
          title="Logar com facebook"
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
