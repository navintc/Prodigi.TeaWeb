import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

import * as firebase from 'firebase';

var config = {
    apiKey:"AIzaSyCmhhYYNQUUnPqZgOEpQwlvejHfuEqirQw",
    authDomain:"thretaweb.firebaseio.com",
    databaseURL:"https://thretaweb.firebaseio.com",
    storageBucket: "thretaweb.firebaseio.com",


};
firebase.initializeApp(config);
=======
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import App from "./scenes/App";
import Home from "./scenes/Home";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Toilet from "./scenes/Toilet";
import Male from "./scenes/Toilet/scenes/Male";
import Female from "./scenes/Toilet/scenes/Female";
>>>>>>> 3966a0f83cf49353bff878ade0b6a3a6166f5cc7


const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/toilet',
    exact: false,
    component: Toilet,
    routes: [
      {
        path: '/toilet/male',
        component: Male,
        exact: true,
      },
      {
        path: '/toilet/female',
        component: Female,
        exact: true,
      },
    ]
  },

];

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  </Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
