import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Statistique from './components/Statistique';
import Map from './components/Map';
import Services from './components/user/Services';
import SignIn from './components/user/SignIn';
import Forfaits from './components/user/Forfaits';
import Accueil from './components/user/Accueil';
import Parameters from './components/user/Parameters';
import History from './components/user/History';
import AuthParent from './components/user/Auth_Parent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
      
      <Switch>
        <Route path='/Home' component={Home} />
        <Route path='/stat' component={Statistique} />
        <Route path='/map' component={Map} />
        <Route path= '/Services' component= {Services} />
        <Route path= '/SignIn' component= {SignIn} />
        <Route path= '/null' component= {null} />
        <Route path= '/Forfaits' component= {Forfaits} />
        <Route path= '/History' component= {History} />
        <Route path= '/Parameters' component= {Parameters} />
        <Route path= '/Accueil' component= {Accueil} />
        <Route path= '/Auth_Parent' component= {AuthParent} />
        <Route path= '/' component= {Accueil} />
        
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;

