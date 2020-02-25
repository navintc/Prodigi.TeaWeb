import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import App from "./scenes/App";
import Home from "./scenes/Home";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Toilet from "./scenes/Toilet";
import Male from "./scenes/Toilet/scenes/Male";
import Female from "./scenes/Toilet/scenes/Female";


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
