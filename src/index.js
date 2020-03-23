import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as firebase from 'firebase';

var config = {
    apiKey:"AIzaSyCmhhYYNQUUnPqZgOEpQwlvejHfuEqirQw",
    authDomain:"thretaweb.firebaseio.com",
    databaseURL:"https://thretaweb.firebaseio.com",
    storageBucket: "thretaweb.firebaseio.com",


};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
