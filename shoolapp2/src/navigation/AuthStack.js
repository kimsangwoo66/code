import React, {Component, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Maintab from '../components/Maintab';
import {createStackNavigator} from '@react-navigation/stack';
//import Loginpage from '../../screens/Login';
//import Signup from '../../screens/Signup';
import {Auth} from '../utils/Setup';
import {View, Text} from 'react-native';
import {SignupUser, SignInUser} from '../utils/ApiService';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Button,
  Item,
  Label,
  Input,
  Right,
  Icon,
} from 'native-base';

const Stack = createStackNavigator();

function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const onAuthStateChanged = (user) => {
    setUser(user);
  };
  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const signUp = () => {
    //alert(JSON.stringify(email) + '\n' + JSON.stringify(password)); //이걸로 json 형식 확인 가능
    SignupUser(email, password)
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const signOut = () => {};

  return (
    <Container>
      <Header>
        <Body>
          <Title>회원가입</Title>
        </Body>
        <Right>
          {!user && (
            <Button transparent icon onPress={signOut}>
              <Icon name="log-out" />
            </Button>
          )}
        </Right>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>아이디를 입력하세요</Label>
            <Input
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)} //아이디 정보를 넣는다
              value={email}
            />
          </Item>

          <Item floatingLabel>
            <Label>비밀번호를 입력하세요</Label>
            <Input
              secureTextEntry
              onChangeText={(password) => setPassword(password)} //아이디 정보를 넣는다
              value={password}
            />
          </Item>

          <Item>
            <Text>{'\n'}</Text>
          </Item>

          <Button block onPress={signUp}>
            <Text>회원가입 완료</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

function Login({navigation}) {
  //로그인 메소드
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const onAuthStateChanged = (user) => {
    setUser(user);
  };
  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const signIn = () => {
    //alert(JSON.stringify(email) + '\n' + JSON.stringify(password)); //이걸로 json 형식 확인 가능
    SignInUser(email, password)
      .then((data) => {
        alert(data);
        navigation.navigate('Maintab_page');
      })
      .catch((error) => {
        alert('잘못입력하셨습니다. 다시입력해주세요');
      });
  };

  const signOut = () => {};

  return (
    <Container>
      <Header>
        <Text>이곳에 로고</Text>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>이메일</Label>
            <Input
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)} //아이디 정보를 넣는다
              value={email}
            />
          </Item>

          <Item floatingLabel>
            <Label>비밀번호</Label>
            <Input
              secureTextEntry
              onChangeText={(password) => setPassword(password)} //아이디 정보를 넣는다
              value={password}
            />
          </Item>

          <Item>
            <Text>{'\n'}</Text>
          </Item>

          <Button block onPress={signIn}>
            <Text>로그인</Text>
          </Button>
          <Item>
            <Text>{'\n'}</Text>
          </Item>
          <Button block onPress={() => navigation.navigate('회원가입')}>
            <Text>회원가입</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default class AuthStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login_page">
          <Stack.Screen name="Login_page" component={Login}></Stack.Screen>
          <Stack.Screen name="Maintab_page" component={Maintab}></Stack.Screen>
          <Stack.Screen name="회원가입" component={Signup}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
