import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import VotePage from './Pages/VotePage'
import Login from './Pages/Login';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path="/vote" component={VotePage} />
      </Switch>
    </div>
  );
}

export default App;
