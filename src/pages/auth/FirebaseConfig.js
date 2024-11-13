import React,{useEffect, useState} from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/4.3.1/firebase.js"
import {getCurrentTime,getYearlyChartdatas,formatDate,ThisWeek,Percentage} from "../Utils";
const firebaseConfig = {
  apiKey: "AIzaSyAQmGE66ACzypXy-bzT6bXtEJ-IHf8ANMg",
  authDomain: "bettimers.firebaseapp.com",
  databaseURL: "https://bettimers-default-rtdb.firebaseio.com",
  projectId: "bettimers",
  storageBucket: "bettimers.appspot.com",
  messagingSenderId: "926730575178",
  appId: "1:926730575178:web:280198eab648a1432675b3",
  measurementId: "G-E0ZL9RFHH1"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
export const dbUsers = firebase.database().ref('/datas/users/');
export const dbReviews = firebase.database().ref('/datas/reviews/');
export const dbPackages = firebase.database().ref('/datas/packages');
export const dbGateways = firebase.database().ref('/datas/gateways');
export const dbPaymentMethods = firebase.database().ref('/datas/payment_methods');
export const dbDeposits = firebase.database().ref('/datas/deposits');
export const dbWithdrawals = firebase.database().ref('/datas/withdrawals');
export const dbCommissions = firebase.database().ref('/datas/commissions');
export const dbChats = firebase.database().ref('/datas/chats');
export const dbNotifications = firebase.database().ref('/datas/notifications');
export const dbImages = firebase.database().ref('/datas/images');

export function useAuth(){
  const [newUser,setNewUser] = useState(null);
  useEffect(() =>{
    const isAuthticated = auth.onAuthStateChanged (user => {
      setNewUser(user);
      let a = user ? user.uid : "";
      localStorage.setItem("isAuthenticated", a);
    });
    return isAuthticated;
  }, []);
  return newUser;
}

export function signUp(email, password){
  return auth.createUserWithEmailAndPassword(email, password);
}
export function signIn(email,password){
  return auth.signInWithEmailAndPassword(email,password);
}
export function sendRequestResetEmail(email){
  return auth.sendPasswordResetEmail(email);
}
export function updatePassword(password){
  //var user = useAuth();
  var user = auth().currentUser
  return user.updatePassword(password);
}
export function signOut(){
  return auth.signOut();
}

export const currentUser = async (e) => {
  try {
    let user;
    const snapUser = await dbUsers.child(e.id).once('value');
    if (snapUser.exists()) {
      let userData = snapUser.val();
      if (e.avatar) {
        const snapImg = await dbImages.child(e.id).once("value");
        if (snapImg.exists()) {
          userData.avatar = snapImg.val().src;
        }
      }
      user = userData;
      return user;
    } else {
      throw new Error('User does not exist');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}