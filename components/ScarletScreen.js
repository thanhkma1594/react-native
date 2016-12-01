import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'; // New code

var ScarletScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.gray()} // New Code
      >
        Scarlet Screen
      </Text>
      <Icon name="rocket" size={30} color="#900" style={styles.welcome}/>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default ScarletScreen;
