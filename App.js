import React from "react";
import { View } from "react-native";
import Login from "./src/components/Login/Login";
import Screen2 from "./src/components/Screen2/Screen2";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Screen2 />
      </View>
    );
  }
}
