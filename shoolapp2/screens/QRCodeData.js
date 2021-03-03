import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class QRCodeData extends Component {
  constructor(props) {
    const qrCodeData = this.props.navigation.getParam('data', 'No data read');
    const scanner = this.props.navigation.getParam('scanner', () => false);
    this.setState({
      qrCodeData: this.props.qrCodeData,
      scanner: this.props.scanner,
    });
  }

  /*componentDidMount() {
    //qr코드스캐너에서 전달한 props를 받는다.
    const qrCodeData = this.props.navigation.getParam('data', 'No data read');
    const scanner = this.props.navigation.getParam('scanner', () => false);
    this.setState({
      qrCodeData:qrCodeData,
      scanner: scanner,
    });
  } */

  render() {
    return (
      <View>
        <Text style={styles.text}>{qrCodeData}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
