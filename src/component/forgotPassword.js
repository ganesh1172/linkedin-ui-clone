import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import useForm from "../validation/useForm";
import validate from '../validation/LoginFormValidationRules';
import Footer from './footer';
import './forgotPassword.css';
import forgot_img from '../Image/header_logo.png';

const useStyles = makeStyles((theme) => ({
    content_header: {
        padding: '0px 0 8px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px 8px',
            fontSize: '1.5rem',
            fontWeight: '400',
        },
        fontWeight: '400',
    },
    form_subtitle: {
        fontWeight: '400',
        padding: '4px 0 12px',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            fontSize: '1rem',
            fontWeight: '400',
        },
    },
    text_input2: {
        width: '45ch',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '100%',
        },
    },
    form_cancel: {
        textTransform: 'initial',
        padding: '8px 48px',
        marginRight: '8px',
        margin: '32px 0',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(50% - 8px)',
            margin: '24px 0px',
        },
        border: '1px solid #0073b1',
        color: '#006097',
        '&:hover': {
            backgroundColor: '#E5F5FC',
            color: '#006097',
        }
    },
    form_submit: {
        textTransform: 'initial',
        padding: '8px 30px',
        margin: '32px 0',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(50% - 8px)',
            margin: '24px 8px',
        },
        backgroundColor: '#0073b1',
        '&:hover': {
            backgroundColor: '#006097',
            color: '#fff',
        }
    }

}));

function ForgotPassword() {
    const classes = useStyles();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    function login() {
        console.log("No errors");
    }
    return (
        <div id="app_container">
            <header>
                <div className="nav_head">
                    <div className="nav_container">
                        <Link to="/"><img src={forgot_img} alt="logo" className="nav_logo" /></Link>
                        <nav className="nav_content">
                            <Link to="/sign_in" className="nav_signin">Sign in</Link>
                            <Link to="/join_now" className="nav_joinnow">Join now</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="for_content">
                <div className="content_wrapper">
                    <Typography variant="h4" className={classes.content_header}>First, let's find your account</Typography>
                </div>
                <div className="content_body">
                    <form onSubmit={handleSubmit} noValidate>
                        <Typography variant="h6" className={classes.form_subtitle}>Please enter your email or phone</Typography>
                        <div className="form_content">
                            <label className="form_label">
                                Email or Phone *
                        </label>
                            <TextField variant="outlined" placeholder="Enter your email or phone" margin="dense" type="email" name="email" className={classes.text_input2} onChange={handleChange} value={values.email || ''} required ></TextField>
                            <div>{errors.email && (<p className="input_error">{errors.email}</p>)}</div>
                        </div>
                        <div className="form_action">
                            <Button variant="outlined" color="primary" className={classes.form_cancel}><Link to="/sign_in" className="btn_cancel">Cancel</Link></Button>
                            <Button variant="contained" color="primary" type="submit" className={classes.form_submit}>Find account</Button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default ForgotPassword;
