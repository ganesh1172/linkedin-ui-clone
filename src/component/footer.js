import React from 'react';
import { Container, Typography } from '@material-ui/core';
import '../App.css';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div>
            <Container max-width="xs" >
                <Typography variant="body1">
                    <CopyrightIcon fontSize="small" />
                </Typography>
            </Container>
        </div>
    );
}
export default Footer;