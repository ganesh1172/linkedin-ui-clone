import React from 'react';
import './home.css';
import './forgotPassword.css';
import { ReactComponent as Icon } from '../Image/home_logo.svg';
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as DesktopSize } from '../Image/home_desktop_size.svg';
import { ReactComponent as MobileSize } from '../Image/home_mobile_size.svg';

const useStyles = makeStyles((theme) => ({
    hero_headline: {
        color: '#2977C9',
        width: '55%',
        paddingBottom: '48px',
        fontSize: '3.5rem',
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div id="app_container">
            <header>
                <div className="home_head">
                    <div className="home_container">
                        <Icon className="home_logo"></Icon>
                        <nav className="home_content">
                            <Link to="/sign_in" className="home_joinnow">Join now</Link>
                            <Link to="/join_now" className="home_signin">Sign in</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="home_main">
                <section className="home_section home_hero">
                    <div class="hero">
                        <Typography variant="h3" className={classes.hero_headline}>Welcome to your professional community</Typography>
                        <DesktopSize className="hero_desktop_img" />
                        <MobileSize className="hero_mobile_img" />
                    </div>

                </section>
            </main>
        </div>
    )

}

export default Home;
