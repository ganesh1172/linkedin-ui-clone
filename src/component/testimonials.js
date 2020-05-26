import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './testimonials.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Arrow } from '../Image/more_arrow.svg';
import { Typography, Button } from '@material-ui/core';
import content from './content';

const useStyles = makeStyles((theme) => ({
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
}));

const ulStyle = {
    transform: 'translate3d(0px, 0px, 0px)',
    paddingLeft: '0px',
};


function Testimonial() {
    const classes = useStyles();
    return (
        <section className="slide_list">
            <header className="slide_list_header">
                <div className="slide_list_header_nav">
                    <div className="slide_list_nav_wrap slide_list_prev">
                        <Button className={classes.slide_list_nav_button} disabled>
                            <Arrow className="slide_list_prev_button" />Previous</Button>
                    </div>
                    <div className="slide_list_nav_wrap slide_list_next">
                        <Button className={classes.slide_list_nav_button}>
                            Next<Arrow /></Button>
                    </div>
                </div>
            </header>
            <ul className="slide_list_item" style={ulStyle}>
                <Slider>
                    {content.map((item, index) => (
                        <li className="testimonials_card">
                            <div className="testinomials_content" key={index}>
                                <Typography variant="h5" className={classes.testinomials_header}>{item.header}
                                </Typography>
                                <Typography variant="body1" className={classes.testinomials_quote}>{item.description}</Typography>
                                <div className="testimonials_actor">
                                    <span>{item.user}</span>
                                    <span>{item.userProfile}</span>
                                </div>
                            </div>
                            <img src={item.image} className="testimonial_image" alt="Noel Debow Testimonial. She is a Visual Merchandiser" />
                        </li>
                    ))}
                </Slider>
            </ul>
        </section>
    );
}

export default Testimonial;
