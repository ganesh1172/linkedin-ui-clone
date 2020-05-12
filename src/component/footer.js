import React from 'react';
import { Container, Typography } from '@material-ui/core';
import '../App.css';
import 'typeface-roboto';

function Footer() {
    return (
        <div className="footer">
            <Container max-width="xs" >
                <div className="footer_wrapper">
                    <img src="/image/Icon.png" alt="Logo" className="footer_logo" />
                    <Typography variant="body2" className="copyright">
                        &copy; 2020
                    </Typography>
                    <ul class="footer_nav">
                        <li>User Agreement</li>
                        <li>Privacy Policy</li>
                        <li>Community Guidelines</li>
                        <li>Cookie Policy</li>
                        <li>Copyright Policy</li>
                        <li>Send Feedback</li>

                    </ul>
                </div>
            </Container>
        </div>
    );
}
export default Footer;