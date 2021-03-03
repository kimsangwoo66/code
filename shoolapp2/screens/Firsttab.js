import React, {useState} from 'react'; // 웹기능을 사용할 수있는 라이브러리
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native'; //앱기능 사용할수있는 라이브러리
import {createStackNavigator} from '@react-navigation/stack'; //화면전환을 사용할 수 있는 라이브러리
import Secondtab from './Secondtab';
import 'react-native-gesture-handler'; //화면전환을 사용할 수 있는 라이브러리
import QRCodeScanner from 'react-native-qrcode-scanner'; //qr 코드 스캐너 라이브러리
import {scanedUser} from '../src/utils/ApiService';
import QRCodeData from '../screens/QRCodeData';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>시작이 좋아</Text>
      <Button
        title="첫버튼"
        onPress={() => navigation.navigate('Secondpage')}
      />
      <Button
        title="qr스캐너"
        onPress={() => navigation.navigate('QRscanpage')}
      />
    </View>
  );
}

const saveUsers = () => {
  scanedUser(Id, Name).then((result) => {});
};

function QRScanner() {
  /*ifScaned = (e) => {
    Linking.openURL(e.data).catch((err) =>
      Alert.alert('Invalid QRCode', e.data),
    );
  };*/

  /*onSucess = (e) => {
    const check = e.data.substring(0, 1);
    console.log('scanned data' + check);
    setId(0);
    setName(1);
  }; */

  onSuccess = (e) => {
    //async , await 제거 해놨음
    this.props.navigation.navigate('QRCodeData', {
      //this.props.navigation 에서 문제가 있음
      data: e.data,
      scanner: this.scanner,
    });
  };

  return (
    <QRCodeScanner
      containerStyle={{backgroundColor: '#FFF', marginBottom: '35%'}}
      onRead={this.onSuccess} //qr코드를 성공적으로 읽었을때 호출
      reactivate={true} //스캔 재활성화
      checkAndroid6Permissions={true}
      permissionDialogMessage="Need Permission To Access Camera"
      reactivateTimeout={10}
      ref={(elem) => {
        this.scanner = elem;
      }}
      showMarker={true} //화면 중앙의 마커
      markerStyle={{borderColor: 'FFF', borderRadius: 10}} // 마커 스타일
      bottomContent={
        <TouchableOpacity>
          <Text style={{fontSize: 21, color: 'rgb(0,122,255)'}}>
            스캔해주세요
          </Text>
        </TouchableOpacity>
      }
    />
  );
}

const Stack = createStackNavigator();
export function Firsttab() {
  /*첫번째 탭에서 버튼 으로 페이지 이동을 하기위한 함수  */
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} /*헤더숨기기*/>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Secondpage" component={Secondtab}></Stack.Screen>
      <Stack.Screen name="QRscanpage" component={QRScanner}></Stack.Screen>
      <Stack.Screen name="QRCodeData" component={QRCodeData}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});

export default Firsttab;
