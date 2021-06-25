import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0ZmMfzYD6uVsc4BlsnwzwOhElb12bhK0",
  authDomain: "web-chat-9c7e3.firebaseapp.com",
  projectId: "web-chat-9c7e3",
  storageBucket: "web-chat-9c7e3.appspot.com",
  messagingSenderId: "742400540644",
  appId: "1:742400540644:web:be7303294b42664eced1f1",
  measurementId: "G-VD0Z9905V1"
};


firebase.initializeApp(firebaseConfig);

window.store = store;




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
