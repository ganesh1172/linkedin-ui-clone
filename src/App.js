import React from 'react';
import { Container, Typography, form, TextField } from '@material-ui/core';
import './App.css';
import 'typeface-roboto';
import Footer from './component/footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    fontWeight: 410,
    paddingBottom: 4,
  },
  title2: {
    paddingBottom: 32,
  }
});


function App() {
  const classes = useStyles();
  return (
    <div id="app_container">
      <header className="head">
      </header>
      <div className="app_content">
        <Container max-width="sm">
          <img src="/image/Icon.png" alt="logo" className="header_logo" />
          <Typography variant="h5" className={classes.title}>Welcome Back</Typography>
          <Typography variant="body1" color="textSecondary" className={classes.title2}>
            Don't miss your next opportunity. Sign in to stay updated on your professional world.
          </Typography>
          <form>
            <TextField fullWidth></TextField>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default App;
