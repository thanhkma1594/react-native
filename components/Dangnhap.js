import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

var Dangnhap = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.blue()} // New Code
      >
        LOGIN
      </Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Dangnhap;
