import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@material-ui/core';
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
  },
  text_style: {
    width: '45ch',
    marginBottom: 12,
  },
  btn_style: {
    width: '360px',
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
  },
  j_Now: {
    textDecoration: 'none',
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
            <TextField id="standard-basic" label="Email or Phone" medium variant="filled" className={classes.text_style} /><br />
            <TextField id="filled-basic" label="Email or Phone" small variant="filled" className={classes.text_style} />
            <br />
            <Button variant="contained" size="large" color="primary" className={classes.btn_style}>
              Sign in
            </Button>
          </form>
          <div>
            <Button color="primary" className={classes.btn_forpass}>Forgot password?</Button>
            <Typography variant="body1" className={classes.new_join}>
              New to LinkedIn? <Link href="#" className={classes.j_now}>
                Join now
      </Link>
            </Typography>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
export default App;
