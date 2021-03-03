import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-qr-code'; //qr코드 생성 라이브러리

function Forthtab() {
  const [inputText1, setInputText1] = useState(''); //첫번쨰 빈칸의 변수 생성 객체
  const [inputText2, setInputText2] = useState(''); //두번째 빈칸의 변수 생성 객체
  const [qrvalue, setQRvalue] = useState('');

  return (
    <View>
      <QRCode
        value={qrvalue ? qrvalue : 'NA'}
        size={290}
        level={'L'} //qr코드 오류 복원 레벨
        includeMargin={true}></QRCode>

      <Text> textInComponent </Text>

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="아이디정보"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={(inputText1) => setInputText1(inputText1)} //아이디 정보를 넣는다
        value={inputText1}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="비밀번호정보"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={(inputText2) => setInputText2(inputText2)} // 비밀번호 정보를 넣는다.
        value={inputText2}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          setQRvalue(inputText1 + inputText2)
        } /* 아이디와 비밀번호 의 텍스트를 입력한 값을 넣어져서 qr코드가 생성된다.  */
      >
        <Text style={styles.submitButtonText}>qr코드 생성</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Forthtab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
