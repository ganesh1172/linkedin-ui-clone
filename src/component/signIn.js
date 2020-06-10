import React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button, Checkbox, label } from '@material-ui/core';
import './signIn.css';
import 'typeface-roboto';
import Footer from '../component/footer';
import { makeStyles } from '@material-ui/core/styles';
import useForm from "../validation/useForm";
import validate from '../validation/LoginFormValidationRules';
import main_logo from '../Image/header_logo.png';
// import ForgotPassword from './component/forgotPassword';
// import JoinNow from './component/joinNow';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    title: {
        fontWeight: '410',
        paddingBottom: '4px',
        paddingTop: '30px',
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
        backgroundColor: '#0073b1',
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
    learnMore: {
        // display: 'block',
        lineHeight: '42px',
        marginBottom: '0',
        position: 'relative',
    },
}));


function SignIn() {
    const classes = useStyles();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    const [checked, setChecked] = useState(false);

    const handleClick = (event) => {
        setChecked(event.target.checked);
    };

    function login() {
        console.log('No errors, submit callback called!');
    }

    return (
        <div id="app_container">
            <header className="head"></header>
            <div className="app_content">
                <Container max-width="sm">
                    <img src={main_logo} alt="logo" className="main_logo" />
                    <Typography variant="h5" className={classes.title}>Welcome Back!</Typography>
                    <Typography variant="body1" color="textSecondary" className={classes.title2}>
                        Don't miss your next opportunity. Sign in to stay updated on your professional world.
            </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <TextField variant="outlined" type="email" name="email" placeholder="Email or Phone" className={classes.text_input} onChange={handleChange} value={values.email || ''} required />
                        {errors.email && (
                            <p className="help">{errors.email}</p>
                        )}
                        <br />
                        <TextField variant="outlined" type="password" name="password" label="Password" className={classes.text_input} onChange={handleChange} value={values.password || ''} required />
                        {errors.password && (
                            <p className="help">{errors.password}</p>
                        )}
                        <div class="remember_me">
                            <Checkbox checked={checked} onChange={handleClick} className={classes.checkboxColor} color="primary" />
                            <label className={classes.learnMore}>Remember me. <Link to="#" style={{ textDecoration: "none" }}>Learn More</Link></label>
                        </div>
                        <Button variant="contained" size="large" color="primary" type="submit" className={classes.btn_signin}>
                            Sign in
              </Button>
                    </form>
                    <div>
                        <Button color="primary" className={classes.btn_forpass}>
                            <Link to="/forgot_password" style={{ textDecoration: "none" }}>Forgot password?</Link></Button>
                        <Typography variant="body1" className={classes.new_join}>
                            New to LinkedIn? <Link to="/join_now" style={{ textDecoration: "none" }}>
                                Join now </Link>
                        </Typography>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
export default SignIn;
