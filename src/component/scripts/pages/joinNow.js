import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core'
import useForm from "../validation/useForm";
import validate from '../validation/LoginFormValidationRules';
import Footer from '../small_components/footer';
import '../../styles/joinNow.css';
import join from '../../assests/join_logo.png';

const useStyles = makeStyles((theme) => ({
    main_subtitle: {
        padding: '40px 16px',
        textAlign: 'center',
        textTransform: 'initial',
    },
    join_formLabel: {
        margin: '10px 0 0px 0',
        display: 'block',
        fontSize: '0.8rem',
    },
    text_input2: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        marginBottom: 5,
        backgroundColor: '#fff',
        borderRadius: '2px'
    },
    join_aggrement: {
        width: '100%',
        fontSize: '0.8rem',
        lineHeight: '1.33333',
        fontWeight: '400',
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'center',
        display: 'block',
        padding: '0 14px 16px',
        margin: '0 auto',
    },
    btn_continue: {
        fontSize: '1.1rem',
        fontWeight: '600',
        textTransform: 'initial',
        margin: '0 16px',
        width: '93%',
        height: '45px',
        background: '#0073b1',
        '&:hover': {
            background: "#006097",
            color: '#fff',
        },
        borderRadius: '2px',
    },
    join_Already: {
        padding: '16px 16px 32px 16px',
        textAlign: 'center',
    }
}));

function JoinNow() {
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
        <div id="app_container" className="page">
            <main className="join_main">
                <form className="form_join" onSubmit={handleSubmit} noValidate>
                    <header className="header_join">
                        <div className="logo_container">
                            <Link to="/">
                                <img src={join} alt="logo" className="join_logo" /></Link>
                        </div>
                        <Typography variant="h4" className={classes.main_subtitle}>Make the most of your professional life</Typography>
                    </header>
                    <section className="join_body">
                        <div className="join_formContainer">
                            <label className={classes.join_formLabel}>Email or Phone number</label>
                            <TextField variant="outlined" margin="dense" type="email" name="email" className={classes.text_input2} onChange={handleChange} value={values.email || ''} required />
                            {errors.email && (
                                <p className="join_error">{errors.email}</p>
                            )}
                            <label className={classes.join_formLabel}>Password(6 or more character)</label>
                            <TextField variant="outlined" type="password" margin="dense" name="password" className={classes.text_input2} onChange={handleChange} value={values.password || ''} required />
                            {errors.password && (
                                <p className="join_error">{errors.password}</p>
                            )}
                        </div>
                        <Typography variant="body2" className={classes.join_aggrement}>By clicking Agree &amp; Join, you agree to the LinkedIn <Link to="#">User Agreement</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Cookie Policy</Link>.</Typography>
                        <Button variant="contained" className={classes.btn_continue} type="submit">
                            <Link to="/join_now" target="_self" style={{ textDecoration: "none", color: "#fff" }}>Agree &amp; Join</Link></Button>
                        <Typography variant="body1" className={classes.join_Already}>Already on LinkedIn? <Link to="/sign_in" style={{ textDecoration: "none" }}>Sign in</Link>
                        </Typography>
                    </section>
                </form>
            </main>
            <Footer />
        </div>
    );
}
export default JoinNow;
