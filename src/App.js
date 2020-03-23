import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import Home from './components/Home/Home';
import News2 from './components/News/News';
import Community from './components/Community/Community';
import Gameinfo from './components/Gameinfo/Gameinfo';
import Gallery from './components/Gallery/Gallery';
import Notfound from './components/Notfound/Notfound';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import LoadingScreen from 'react-loading-screen';

import * as firebase from 'firebase';

class App extends Component{


  // ------------------------------------
  constructor (props){
    super(props);
    this.state={apiResponse:"", loadr: true};
  
    this.state ={
      speed: 10
    }
  

  }


  loadstate = true;

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text ())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }
  // ------------------------------------

  componentDidMount(){
    this.setState({loadr: false});

    const rootRef = firebase.database().ref().child('thretaweb');
    const speedRef  = rootRef.child('speed');
    speedRef.on('value', snap =>{
      this.setState({
        speed: snap.val()
      });
    });
  }

  state ={
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler =() =>{
    this.setState({sideDrawerOpen: false});
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen){
      
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div>
        <div>
          <LoadingScreen
              loading={this.state.loadr}
              bgColor='#f1f1f1'
              spinnerColor='#9ee5f8'
              textColor='#676767'
              logoSrc='/logo.png'
              text='Here an introduction sentence (Optional)'
            ></LoadingScreen>

          <div style = {{height: '100%'}} className="App">
            <Toolbar drawerClickHandler= {this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen}/>
            {backdrop}
            
            <main style={{marginTop:'64px'}}>

              
              
            </main>

          </div>
          <LoadingScreen
              loading={this.state.loadr}
              bgColor='#f1f1f1'
              spinnerColor='#9ee5f8'
              textColor='#676767'
              logoSrc='/logo.png'
              text='Here an introduction sentence (Optional)'
            >
            <Router>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                
                <Route exact path="/News" component={News2} ></Route>
                <Route exact path="/Community" component={Community}></Route>
                <Route exact path="/Gallery" component={Gallery}></Route>
                <Route exact path="/Gameinfo" component={Gameinfo}></Route>
                <Route path="/" component={Notfound}></Route>

              </Switch>
            </Router>
        
          
            </LoadingScreen>

            
            <h1 className="feedtext">{this.state.speed}</h1>
        </div>
              {/* The core Firebase JS SDK is always required and must be listed first */}
              <script src="/__/firebase/7.11.0/firebase-app.js"></script>

              {/* TODO: Add SDKs for Firebase products that you want to use
              https://firebase.google.com/docs/web/setup#available-libraries */}
              <script src="/__/firebase/7.11.0/firebase-analytics.js"></script>

              {/* Initialize Firebase */}
              <script src="/__/firebase/init.js"></script>
      </div>
    );
}
}

export default App;
