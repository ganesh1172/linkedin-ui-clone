import React from 'react';
import './App.css';
import Home from './component/home';
import SignIn from './component/signIn';
import ForgotPassword from './component/forgotPassword';
import JoinNow from './component/joinNow';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign_in">
          <SignIn />
        </Route>
        <Route exact path="/forgot_password" >
          <ForgotPassword />
        </Route>
        <Route path="/join_now">
          <JoinNow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
