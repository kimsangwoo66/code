import * as React from 'react';
import {Text, View} from 'react-native';
//import config from '../../firebase.json';
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC6WcZUClD8QmYYPN9KRcuu-yaPvSnalps',
  authDomain: 'schoolcode1-b6a10.firebaseapp.com',
  databaseURL: 'https://schoolcode1-b6a10-default-rtdb.firebaseio.com',
  projectId: 'schoolcode1-b6a10',
  storageBucket: 'schoolcode1-b6a10.appspot.com',
  messagingSenderId: '958841648506',
  appId: '1:958841648506:web:d76ebb05fe7225735852c3',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, Auth, database};

function Setup() {
  return;
}

export default Setup;
