import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as firebase from "firebase/app";

Vue.config.productionTip = false

// Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyCJfDPEKM1TYU3gcBrY5mRmxHytnEwS4a0",
  authDomain: "launchlist-1a24d.firebaseapp.com",
  projectId: "launchlist-1a24d",
  storageBucket: "launchlist-1a24d.appspot.com",
  messagingSenderId: "956052717512",
  appId: "1:956052717512:web:6a53600eb46d46c28d0afd",
  measurementId: "G-GKLYP7C984"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
