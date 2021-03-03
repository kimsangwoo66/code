import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Secondtab = () => {
  return (
    <View style={styles.MainView}>
      <Text>second pase</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Secondtab;
