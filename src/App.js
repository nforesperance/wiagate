import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Statistique from './components/Statistique';
import Service from './components/Service'
import User from './components/User'
import Map from './components/Map'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/stat' component={Statistique} exact/>
        <Route path='/service' component={Service} exact/>
        <Route path='/users' component={User} exact/>
        <Route path='/map' component={Map} exact/>
        <Route path="*" component={Home} exact/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
