import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import Chat2 from './screens/atendimento2/Chat2';
import Chat4 from './screens/atendimento4/Chat4';

import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyA0ZmMfzYD6uVsc4BlsnwzwOhElb12bhK0",
  authDomain: "web-chat-9c7e3.firebaseapp.com",
  projectId: "web-chat-9c7e3",
  storageBucket: "web-chat-9c7e3.appspot.com",
  messagingSenderId: "742400540644",
  appId: "1:742400540644:web:be7303294b42664eced1f1",
  measurementId: "G-VD0Z9905V1"
});

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()


window.store = store;

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
