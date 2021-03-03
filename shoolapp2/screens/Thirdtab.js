import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Thirdtab = () => {
  return (
    <View style={styles.MainView}>
      <Text>third pase</Text>
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

export default Thirdtab;
