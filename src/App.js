import React from 'react';
import './App.css';
import Home from './component/scripts/pages/home';
import SignIn from './component/scripts/pages/signIn';
import ForgotPassword from './component/scripts/pages/forgotPassword';
import JoinNow from './component/scripts/pages/joinNow';
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
