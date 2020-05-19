import React from 'react';
import './App.css';
import SignIn from './component/signIn';
import ForgotPassword from './component/forgotPassword';
import JoinNow from './component/joinNow';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div id="app_container">
      <Router>
        <Switch>
          <Route path="/">
            <SignIn />
          </Route>
          <Route path="/forgot_password">
            <ForgotPassword />
          </Route>
          <Route path="/join_now">
            <JoinNow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
