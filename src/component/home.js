import React from 'react';
import './home.css';
import './forgotPassword.css';
import { ReactComponent as Icon } from '../Image/home_logo.svg';
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as DesktopSize } from '../Image/home_desktop_size.svg';
import { ReactComponent as MobileSize } from '../Image/home_mobile_size.svg';
import { ReactComponent as Arrow } from '../Image/more_arrow.svg';
import Work from '../Image/working_yourself.jpg';
import Job from '../Image/searching_job.jpg';

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
    see_more_list_header: {
        fontSize: '1.1rem',
        fontWeight: '500',
        color: 'rgba(0,0,0,0.6)',
        marginBottom: '20px',
        textTransform: 'uppercase',
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
                    <div class="intent_module">
                        <ul class="intent_module_list" style={{ paddingLeft: "0px" }}>
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
                    <div className="feature_learning">
                        <div className="learning_cta">
                            <div className="learning_content">
                                <Typography variant="h4" className={classes.learning_header}>Learn the skills that can help you now</Typography>
                            </div>
                        </div>
                        <secton className="slide_test trending_courses">
                            <ul className="slide_list">
                                <li className="trending_course_item">
                                    <Link to="#" className="related_content_card">
                                        <div className="related_entity_media">
                                            <img src={Work} className="related_entity_img" alt="working yourself" />
                                        </div>
                                        <div className="related_content_info">
                                            <Typography variant="h6" className={classes.related_content_title}>Remote Working: Setting Yourself and Your Teams Up for Success</Typography>
                                        </div>
                                    </Link>
                                </li>
                                <li className="trending_course_item">
                                    <Link to="#" className="related_content_card">
                                        <div className="related_entity_media">
                                            <img src={Job} className="related_entity_img" alt="working yourself" />
                                        </div>
                                        <div className="related_content_info">
                                            <Typography variant="h6" className={classes.related_content_title}>Finding a Job during Challenging Economic Times</Typography>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </secton>
                    </div>
                </section>
                <section className="home_section no-min-height">
                    <div className="search_cta">
                        <div className="job_finder_cta">
                            <Typography variant="h4" className={classes.job_finder_header}>Find open jobs and internships</Typography>
                        </div>
                        <div className="suggested_search">
                            <div className="see_more_list">
                                <Typography variant="body2" className={classes.see_more_list_header}>Suggested search</Typography>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )

}

export default Home;
