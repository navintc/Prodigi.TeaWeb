import React from "react";
import { Switch, Link } from 'react-router-dom';
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";

class Toilet extends React.Component{

  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/app">App</Link>
        <h1>Awesome Toilet!</h1>
        <Link to="/toilet/male">Male</Link>
        <br/>
        <Link to="/toilet/female">Female</Link>
        <Switch>
          {this.props.routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    );
  }

}

export default Toilet;
