import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,View,Image,Text,TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import Dangnhap from './Dangnhap';
import Baitap from './Baitap';
import Blue from './Blue';
import Green from './Green';

var TabIcon = ({selected,title}) => {
  return(
    <Text style={{color: selected ? 'green':'black'}}>
      {title}
    </Text>
  )
};

var App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{backgroundColor:"#fff"}}
        >

          <Scene key="osu" title="MINY" icon={TabIcon} titleStyle={{color:"green",fontSize:20}}

          >
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="MINY.VN"
              initial
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          <Scene key="lg" title="LOGIN" icon={TabIcon} titleStyle={{color:"green",fontSize:20}}>
            <Scene
              key="dangnhap"
              component={Dangnhap}
              title="ĐĂNG NHẬP"
              initial
            />
            <Scene
              key="blue"
              component={Blue}
              title="XANH DƯƠNG"
            />
          </Scene>

          <Scene key="ask" title="ASK" icon={TabIcon} titleStyle={{color:"green",fontSize:20}}>
            <Scene
              key="baitap"
              component={Baitap}
              title="BÀI TẬP"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default App;
