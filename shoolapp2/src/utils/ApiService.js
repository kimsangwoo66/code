import React from 'react';
import {Auth, database} from './Setup';

export const SignupUser = (email, password) => {
  alert(email);
  return new Promise(function (resolve, reject) {
    Auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve('회원가입 되었습니다.');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SignInUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    Auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve('로그인 되었습니다.');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SignOutUser = () => {
  //사용 안함
  return new Promise(function (resolve, reject) {
    Auth()
      .signOut()
      .then(() => {
        resolve('로그아웃했습니다.');
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const scanedUser = (Id, Name) => {
  //qr코드 스캔정보를 firebase로 전달하기 위한 메소드 , 막힘
  return new Promise(function (resolve, reject) {
    let key;
    if (Id != null) {
      key = Id;
    } else {
      key = database().ref().push.key;
    }
    let dataToSave = {
      Id: key,
      Name: Name,
    };
    database()
      .ref('users')
      .update(dataToSave)
      .then(() => {
        resolve('등록 성공하셨습니다.');
      })
      .catch((err) => {
        reject(err);
      });
  });
};
