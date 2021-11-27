import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import VotePage from './Pages/VotePage'
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import { AuthContext } from './Contexts/AuthContext';

function App() {


  const { login, wallet } = useContext(AuthContext);
  const { loggedIn } = login;
  const { walletConnected } = wallet;

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path="/vote">
          {
            loggedIn && walletConnected ? <VotePage /> : <Redirect to='/login' />
          }
        </Route>
        <Route path="/admin">
          {
            loggedIn && walletConnected ? <Admin /> : <Redirect to='/' />
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
