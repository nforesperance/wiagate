import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Statistique from './components/Statistique';
import Map from './components/Map';
import Services from './components/user/Services';
import SignIn from './components/user/SignIn';
import Auth from './components/user/Auth';
import Forfaits from './components/user/Forfaits';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
      
      <Switch>
        <Route path='/Home' component={Home} exact/>
        <Route path='/stat' component={Statistique} exact/>
        <Route path='/map' component={Map} exact/>
        <Route path= '/Services' component= {Services} exact/>
        <Route path= '/Auth' component= {Auth} exact/>
        <Route path= '/SignIn' component= {SignIn} exact/>
        <Route path= '/null' component= {null} exact/>
        <Route path= '/Forfaits' component= {Forfaits} exact/>
        <Route path= '/' component= {Auth} exact/>
        
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
