import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import VotePage from './components/vote_page';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/vote" component={VotePage} />
      </Switch>
    </div>
  );
}

export default App;
