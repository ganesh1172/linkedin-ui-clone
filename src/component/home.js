import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Directory from './directory';
import Footer from './footer';
import Testimonials from './testimonials';
import './home.css';
import './forgotPassword.css';
import { ReactComponent as Icon } from '../Image/home_logo.svg';
import { ReactComponent as DesktopSize } from '../Image/home_desktop_size.svg';
import { ReactComponent as MobileSize } from '../Image/home_mobile_size.svg';
import { ReactComponent as Arrow } from '../Image/more_arrow.svg';
import { ReactComponent as Down } from '../Image/down_arrow.svg';
import { ReactComponent as Meeting } from '../Image/meeting.svg';
import { ReactComponent as Learning } from '../Image/learning.svg';
import { ReactComponent as Started } from '../Image/get_started.svg';
import Brand from '../Image/brand_discovery_image.jpg';
// import Opening from './opening';

const useStyles = makeStyles((theme) => ({
    hero_headline: {
        color: '#2977C9',
        width: '55%',
        paddingBottom: '48px',
        fontSize: '3.5rem',
    },
    learning_header: {
        fontSize: '3.125rem',
        lineHeight: '60px',
        fontWeight: '400',
        color: 'rgba(0,0,0,0.9)',
        marginBottom: '24px',
    },
    related_content_title: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: '1.1rem',
        height: 'auto',
        width: 'auto',
        overflow: 'hidden',
        textOverflow: 'initial',
        whiteSpace: 'initial',
    },
    job_finder_header: {
        fontSize: '2.2rem',
        color: 'rgba(0,0,0,0.9)',
        lineHeight: '60px',
        fontWeight: '400',
    },
    see_less_list_header: {
        fontSize: '1rem',
        fontWeight: '500',
        color: 'rgba(0,0,0,0.6)',
        marginBottom: '20px',
        textTransform: 'uppercase',
    },
    talent_finder_header: {
        width: '400px',
        marginRight: '67px',
        fontSize: '2.5rem',
        fontWeight: '400',
        color: '#B24020',
        lineHeight: '50px',
    },
    people_cta_header: {
        marginBottom: '40px',
    },
    learning_cta_header: {
        marginBottom: '40px',
    },
    join_cta_header: {
        fontSize: '3.6rem',
        fontFamily: 'sans-serif',
        color: '#2977c9',
        fontWeight: '200',
        lineHeight: '70px',
        margin: '20px 0 40px 0',
    },
    marketing_header: {
        fontSize: '2.5rem',
        margin: '0 0 16px 48px',
        color: '#B24020',
        lineHeight: '50px',
        fontWeight: '400',
    },
    marketing_subtitle: {
        fontSize: '2.4rem',
        color: 'rgba(0,0,0,0.9)',
        fontWeight: '300',
        lineHeight: '50px',
        marginLeft: '48px',
    },
    discovery_header: {
        fontSize: '2.5rem',
        marginBottom: '8px',
        color: '#B24020',
        lineHeight: '50px',
        fontWeight: '400',
    },
    discovery_subtitle: {
        fontSize: '2.4rem',
        color: 'rgba(0,0,0,0.9)',
        fontWeight: '300',
        lineHeight: '50px',
        marginBottom: '40px',
    },
}));


function Home() {

    const classes = useStyles();
    const [hidden, setShow] = useState(true);

    return (
        <div id="app_container">
            <header>
                <div className="home_head">
                    <div className="home_container">
                        <Link to="/"><Icon className="home_logo"></Icon></Link>
                        <nav className="home_content">
                            <Link to="/sign_in" className="home_joinnow">Sign in</Link>
                            <Link to="/join_now" className="home_signin">Join now</Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="home_main">
                <section className="home_section home_hero">
                    <div className="hero">
                        <Typography variant="h3" className={classes.hero_headline}>Open job. People<br />hiring.</Typography>
                        <DesktopSize className="hero_desktop_img" />
                        <MobileSize className="hero_mobile_img" />
                    </div>
                    <section className="search">
                        <ul style={{ paddingLeft: "0px" }}>
                            <li><Link to="#" className="brand_discovery_button">Search for a job <Arrow className="brand_arrow" /></Link></li>
                            <li><Link to="#" className="brand_discovery_button">Find a person you know <Arrow className="brand_arrow" /></Link></li>
                            <li><Link to="#" className="brand_discovery_button">Learn a new skill <Arrow className="brand_arrow" /></Link></li>
                        </ul>
                        {/* <Opening /> */}
                    </section>
                </section>
                <section className="home_section no-min-height">
                    <div className="search_cta">
                        <div className="job_finder_cta">
                            <Typography variant="h4" className={classes.job_finder_header}>Find open jobs and internships</Typography>
                        </div>
                        <div className="suggested_search">
                            <div className="see_less_list">
                                <Typography variant="body2" className={classes.see_less_list_header}>Suggested search</Typography>
                                <div className="see_more-list">
                                    <input type="checkbox" className="see_more_less_state" />
                                    <ul className="see_more_less_list" style={{ paddingLeft: "0px" }}>
                                        <li><Link to="" className="pill">Executive Assistant, India</Link></li>
                                        <li><Link to="" className="pill">Assistant, India</Link></li>
                                        <li><Link to="" className="pill">Office Assistant, India</Link></li>
                                        {hidden ? null : <>
                                            <li><Link to="" className="pill">Company Secretary, India</Link></li>
                                            <li><Link to="" className="pill">Caller, India</Link></li>
                                            <li><Link to="" className="pill">Administrative Specialist, India</Link></li>
                                            <li><Link to="" className="pill">Personal Assistant, India</Link></li>
                                            <li><Link to="" className="pill">Reviewer, India</Link></li>
                                            <li><Link to="" className="pill">Receptionist, India</Link></li>
                                            <li><Link to="" className="pill">Executive Assistant, Mumbai</Link></li> </>}
                                    </ul>
                                    {hidden ? <>
                                        <label className="show_more_less_label" role="button" onClick={() => setShow(false)}>
                                            <span className="show_more">
                                                Show more <Down className="arrow_down_icon" /></span>
                                        </label> </> : <>
                                            <label className="show_more_less_label" role="button" onClick={() => setShow(true)}>
                                                <span className="show_more">
                                                    Show less <Down className="arrow_up_icon" /></span>
                                            </label> </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section section_full">
                    <div className="talent_finder">
                        <Typography variant="h4" className={classes.talent_finder_header}>Post your job and find the people you need</Typography>
                        <Link to="#" className="pill pill_transparent">Post a job</Link>
                    </div>
                </section>
                <section className="home_section testimonials">
                    <Testimonials />
                </section>
                <section className="home_section no-min-height">
                    <div className="product_cta">
                        <div className="people_cta">
                            <Meeting className="people_cta_img" />
                            <div className="people_cta_content">
                                <Typography variant="h3" className={classes.people_cta_header}>Connect with people who can help</Typography>
                                <Link to="#" className="pill pill_transparent">Find people you know</Link>
                            </div>
                        </div>
                        <div className="learning_cta">
                            <Learning className="learning_cta_img" />
                            <div className="learning_cta_content">
                                <Typography variant="h3" className={classes.learning_cta_header}>Learn the skills that can help you now</Typography>
                                <div className="dropdown learning_cta">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_section">
                    <div className="brand_discovery">
                        <div className="brand_discovery_cta">
                            <Typography variant="h4" className={classes.discovery_header}>Who is LinkedIn for?</Typography>
                            <Typography variant="subtitle1" className={classes.discovery_subtitle}>Anyone looking to navigate their professional life</Typography>
                            <ul style={{ paddingLeft: "0px" }}>
                                <li><Link to="#" className="brand_discovery_button">Find a co-worker or classmate <Arrow className="brand_arrow" /></Link></li>
                                <li><Link to="#" className="brand_discovery_button">Find a new job <Arrow className="brand_arrow" /></Link></li>
                                <li><Link to="#" className="brand_discovery_button">Find a course or training <Arrow className="brand_arrow" /></Link></li>
                            </ul>
                        </div>
                        <img src={Brand} className="brand_discovery_img" alt="Who is LinkedIn for?" />
                    </div>
                </section>
                <section className="home_section">
                    <div className="marketing">
                        <div className="marketing_media">
                            <iframe src="https://www.youtube.com/embed/oHpdTckid4Y?rel=0" className="marketing_iframe" title="A recruiter's guide to job search | Full Story" allowFullScreen></iframe>
                        </div>
                        <div className="marketing_copy">
                            <Typography variant="h4" className={classes.marketing_header}>3 ways to find your job</Typography>
                            <Typography variant="subtitle1" className={classes.marketing_subtitle}>Check out these steps to help you get started</Typography>
                        </div>
                    </div>
                </section>
                <section className="home_section">
                    <div className="join_cta">
                        <Typography variant="h3" className={classes.join_cta_header}>Join your colleagues, classmates, and friends on LinkedIn.</Typography>
                        <Link to="#" className="pill pill_blue">Get Started</Link>
                        <Started className="join_img" />
                    </div>
                </section>
                <section className="home_section section_full">
                    <Directory />
                </section>
            </main>
            <Footer />
        </div>
    )

}

export default Home;
