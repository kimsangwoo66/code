import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Firstpage from '../../screens/Firsttab';
import Secondpage from '../../screens/Secondtab';
import Thirdpage from '../../screens/Thirdtab';
import Forthpage from '../../screens/Forthtab';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator(); //앱의 각 텝 화면을 지정하기위한 객체 선언

export default function Maintab() {
  //각종 텝 모음
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈화면" component={Firstpage} />
      <Tab.Screen name="명단 화면" component={Secondpage} />
      <Tab.Screen name="시간표 화면" component={Thirdpage} />
      <Tab.Screen name="마이페이지 화면" component={Forthpage} />
    </Tab.Navigator>
  );
}
