import React from 'react';
import{
  StyleSheet, Text, View,
} from 'react-native';
import {Actions} from 'react-native-route-flux';

const ask = () => {
  return(
    <View>
      <Text onPress={()=>Actions.baitap()}>
        Bai tap
      </Text>
    </View>
  )
} ;

export default ask;
