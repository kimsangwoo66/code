import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Maintab from './src/components/Maintab';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './src/navigation/AuthStack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
//<AuthStack />
class App extends Component {
  render() {
    return (
      // 첫시작은 로그인 페이지 , 로그인을 완료하면 메인 페이지로 넘어가야된다.
      <AuthStack />
    );
  }
}

export default App;
