import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.backgroundWrapper}>
        <View style={styles.backgroundContainer}>
          <View>aa</View>
          <View style={styles.favoriteSerie}>
            <Text style={styles.favoriteSerieText}>Sua Série preferida</Text>
          </View>
          <View>aa</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundWrapper: {
    backgroundColor: "#9D50BB",
    height: "100%"
  },
  backgroundContainer: {
    backgroundColor: "#471A57",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    borderRadius: 9
  },
  favoriteSerie: {
    height: 200,
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#471A57",
    backgroundColor: "#84419C"
  },
  favoriteSerieText: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  }
});
