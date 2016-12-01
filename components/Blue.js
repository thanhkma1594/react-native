import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

var Blue = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}

      >
      Đây là màu xanh dương
      </Text>
      <Text>Đây là màu xanh dương</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Blue;
