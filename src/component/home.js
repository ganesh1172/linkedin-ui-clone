import React from 'react';
import './home.css';
import './forgotPassword.css';
import { ReactComponent as Icon } from '../Image/home_logo.svg';
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as DesktopSize } from '../Image/home_desktop_size.svg';
import { ReactComponent as MobileSize } from '../Image/home_mobile_size.svg';
import { ReactComponent as Arrow } from '../Image/more_arrow.svg';
import { ReactComponent as Down } from '../Image/down_arrow.svg';
import { ReactComponent as Meeting } from '../Image/meeting.svg';
import { ReactComponent as Learning } from '../Image/learning.svg';
import Noel from '../Image/noel_debow.jpg';
import Aaron from '../Image/aaron_pagan.jpg';
import Curtis from '../Image/curtis_pagan.jpg';

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
    slide_list_nav_button: {
        textTransform: 'initial',
    },
    testinomials_header: {
        fontSize: '2.5rem',
        fontWeight: '400',
        color: '#2977c9',
        lineHeight: '50px',
    },
    testinomials_quote: {
        margin: '8px 0',
        fontSize: '1.9rem',
        lineHeight: '1.25',
        fontWeight: '300',
        color: 'rgba(0,0,0,0.9)',
    },
    people_cta_header: {
        marginBottom: '40px',
    },
    learning_cta_header: {
        marginBottom: '40px',
    }
}));

const ulStyle = {
    transform: 'translate3d(0px, 0px, 0px)',
    paddingLeft: '0px',
};

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
                    <div className="hero">
                        <Typography variant="h3" className={classes.hero_headline}>Welcome to your professional community</Typography>
                        <DesktopSize className="hero_desktop_img" />
                        <MobileSize className="hero_mobile_img" />
                    </div>
                    <div className="intent_module">
                        <ul className="intent_module_list" style={{ paddingLeft: "0px" }}>
                            <li>
                                <Link to="#" className="intent_module_button">
                                    Search for a job <Arrow className="intent_arrow" /></Link></li>
                            <li>
                                <Link to="#" className="intent_module_button">
                                    Find a person you know <Arrow className="intent_arrow" /></Link></li>
                            <li>
                                <Link to="#" className="intent_module_button">
                                    Learn a new skill <Arrow className="intent_arrow" /></Link></li>
                        </ul>
                    </div>
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
                                        <li><Link to="" className="pill">Remote Jobs</Link></li>
                                        <li><Link to="" className="pill">Warehouse Jobs</Link></li>
                                        <li><Link to="" className="pill">Amazon Jobs</Link></li>
                                        <li><Link to="" className="pill">Engineering</Link></li>
                                        <li><Link to="" className="pill">Business Development</Link></li>
                                        <li><Link to="" className="pill">Finance</Link></li>
                                        <li><Link to="" className="pill"> Administrative Assistant</Link></li>
                                        <li><Link to="" className="pill">Retailers Associate</Link></li>
                                        <li><Link to="" className="pill">Customer Services</Link></li>
                                        <li><Link to="" className="pill">Operations</Link></li>
                                    </ul>
                                    <label className="show_more_less_label" role="button">
                                        <span className="see_more_less-list_show_more">
                                            Show more <Down className="arrow_down_icon" /></span>
                                    </label>
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
                    <section className="slide_list">
                        <header className="slide_list_header">
                            <div className="slide_list_header_nav">
                                <div className="slide_list_nav_wrap slide_list_prev">
                                    <Button className={classes.slide_list_nav_button} disabled >
                                        <Arrow className="slide_list_prev_button" />Previous</Button>
                                </div>
                                <div className="slide_list_nav_wrap slide_list_next">
                                    <Button className={classes.slide_list_nav_button}>
                                        Next<Arrow /></Button>
                                </div>
                            </div>
                        </header>
                        <ul className="slide_list_item" style={ulStyle}>
                            <li className="testimonials_card">
                                <div className="testinomials_content">
                                    <Typography variant="h5" className={classes.testinomials_header}>Noel got a job after being unemployed
                                    </Typography>
                                    <Typography variant="body1" className={classes.testinomials_quote}>“After I lost my job, one of the first things I did was update my LinkedIn profile. I had a recruiter reach out to me and I ended up getting the job.”</Typography>
                                    <div className="testimonials_actor">
                                        <span>Noel Debow</span>
                                        <span>Visual Merchandiser</span>
                                    </div>
                                </div>
                                <img src={Noel} className="testimonial_image" alt="Noel Debow Testimonial. She is a Visual Merchandiser" />
                            </li>
                            <li className="testimonials_card">
                                <div className="testinomials_content">
                                    <Typography variant="h5" className={classes.testinomials_header}>Aaron was matched with a recruiter</Typography>
                                    <Typography variant="body1" className={classes.testinomials_quote}>“I was having a very hard time finding a job. A supervisor reached out to me on LinkedIn. We set up an interview and from there I was hired. LinkedIn was the matchmaker.”</Typography>
                                    <div className="testimonials_actor">
                                        <span>Aaron Pagan</span>
                                        <span>Accessibility Technology Sales</span>
                                    </div>
                                </div>
                                <img src={Aaron} className="testimonial_image" alt="Aaron Pagan Testimonial, He is an Accessibility Technology salesperson" />
                            </li>
                            <li className="testimonials_card">
                                <div className="testinomials_content">
                                    <Typography variant="h5" className={classes.testinomials_header}>Curtis regained his confidence</Typography>
                                    <Typography variant="body1" className={classes.testinomials_quote}>“I didn’t think I could make it in the city. I went on LinkedIn and found a lot of jobs  - I realized, I am qualified. So, I applied. And I got it!”</Typography>
                                    <div className="testimonials_actor">
                                        <span>Curtis Pagan</span>
                                        <span>Non-profit Marketer</span>
                                    </div>
                                </div>
                                <img src={Curtis} className="testimonial_image" alt="Curtis Testimonial. He is a Non-profit marketer" />
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="home_section no-min-height">
                    <div className="product_cta">
                        <div className="people_cta">
                            <Meeting className="people_cta_img" />
                            <div className="people_cta_content">
                                <Typography variant="h3" className={classes.people_cta_header}>Connect with people who can help</Typography>
                                <Link className="pill pill_transparent">Find people you know</Link>
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
            </main>
        </div>
    )

}

export default Home;
