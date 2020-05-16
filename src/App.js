import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import './App.css';
import 'typeface-roboto';
import Footer from './component/footer';
import { makeStyles } from '@material-ui/core/styles';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import Img from './Image/header_logo.png';
import ForgotPassword from './component/forgotPassword';
import JoinNow from './component/joinNow';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 410,
    paddingBottom: 4,
  },
  title2: {
    paddingBottom: 32,
  },
  text_input: {
    width: '45ch',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginBottom: 12,
    color: '#fff',
  },
  btn_signin: {
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    padding: '12px 0',
    marginTop: '8px',
    textTransform: 'initial',
    '&:hover': {
      backgroundColor: '#006097',
      color: '#fff',
    }
  },
  btn_forpass: {
    textTransform: 'initial',
    '&:hover': {
      background: "#E5F5FC",
      color: '#006097',
    },
    marginTop: '24px',
  },
  new_join: {
    marginTop: '12px',
  }
}));


function App() {
  const classes = useStyles();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
  }
  return (
    <Router>
      <div id="app_container">
        <header className="head"></header>
        <div className="app_content">
          <Container max-width="sm">
            <img src={Img} alt="logo" className="header_logo" />
            <Typography variant="h5" className={classes.title}>Welcome Back</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.title2}>
              Don't miss your next opportunity. Sign in to stay updated on your professional world.
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
              <TextField variant="outlined" label="Email or Phone" type="email" name="email" className={classes.text_input} onChange={handleChange} value={values.email || ''} required />
              {errors.email && (
                <p className="help">{errors.email}</p>
              )}
              <br />
              <TextField variant="outlined" label="Password" type="password" name="password" className={classes.text_input} onChange={handleChange} value={values.password || ''} required />
              {errors.password && (
                <p className="help">{errors.password}</p>
              )}
              <br />
              <Button variant="contained" size="large" color="primary" type="submit" className={classes.btn_signin}>
                Sign in
              </Button>
            </form>
            <div>
              <Button color="primary" className={classes.btn_forpass}>
                <Link to="/ForgotPassword" target="_self" style={{ textDecoration: "none" }}>Forgot password?</Link></Button>
              <Typography variant="body1" className={classes.new_join}>
                New to LinkedIn? <Link to="/JoinNow" style={{ textDecoration: "none" }}>
                  Join now </Link>
              </Typography>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
      <Switch>
        <Route path="/ForgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/JoinNow">
          <JoinNow />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
