import React from 'react';
import './home.css';
import './forgotPassword.css';
import { ReactComponent as Icon } from '../Image/home_logo.svg';
import { ReactComponent as Arrow } from '../Image/more_arrow.svg';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div id="app_container">
            <header>
                <div className="home_head">
                    <div className="home_container">
                        <Icon className="home_logo" />
                        <nav className="home_content">
                            <Link to="/sign_in" className="home_joinnow">Join now</Link>
                            <Link to="/join_now" className="home_signin">Sign in</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="report_banner">
                <div className="banner_content">
                    <Link className="report_banner_link">Help and resources during the COVID-19 outbreak. <span style={{ textDecoration: "underline" }}>Learn More
                    <Arrow className="arrow" /></span></Link>
                </div>
            </div>
        </div>
    )

}

export default Home;
