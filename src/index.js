import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Components/Dashboard'
import Sign from './Components/Dashboard/signIn-signUp'
import Loader from './Components/Home/preloader'
import reportWebVitals from './reportWebVitals';

import Store from "./Store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider
} from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";
import {config} from "./config"

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirestoreProvider  {...config} firebase={firebase}>
    <Router>
    <Store>
      <App />
    </Store>
    </Router>
    </FirestoreProvider>
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
