import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

var Baitap = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.baitap()} // New Code
      >
        Scarlet Screen
      </Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Baitap;
