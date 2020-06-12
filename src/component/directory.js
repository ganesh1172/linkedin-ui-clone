import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './directory.css';
import { ReactComponent as Dlogo } from '../Image/directory_logo.svg';

const useStyles = makeStyles((theme) => ({
    directory_list_heading: {
        fontSize: '1rem',
        fontWeight: '500',
        color: 'rgba(0,0,0,0.9)',
        lineHeight: '20px',
        marginBottom: '8px',
    },
    directory_link: {
        fontSize: '0.9rem',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#666666',
        textDecoration: 'none',
    }
}));

const ulStyle = {
    paddingLeft: '0px',
};

function Directory() {
    const classes = useStyles();
    return (
        <div className="directory">
            <Dlogo className="directory_logo" />
            <div className="directory_lists" >
                <div className="directory_column">
                    <Typography variant="body1" className={classes.directory_list_heading}>General</Typography>
                    <ul className="directory_list" style={ulStyle}>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Sign Up</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Help Center</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>About</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Press</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Blog</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Careers</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Developers</Link></li>
                    </ul>
                </div>
                <div className="directory_column">
                    <Typography variant="body1" className={classes.directory_list_heading}>Browse LinkedIn</Typography>
                    <ul className="directory_list" style={ulStyle}>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Learning</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Jobs</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Salary</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Mobile</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>ProFinder</Link></li>
                    </ul>
                </div>
                <div className="directory_column">
                    <Typography variant="body1" className={classes.directory_list_heading}>Business Solutions</Typography>
                    <ul className="directory_list" style={ulStyle}>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Talent</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Marketing</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Sales  </Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Learning</Link></li>
                    </ul>
                </div>
                <div className="directory_column">
                    <Typography variant="body1" className={classes.directory_list_heading}>Directories</Typography>
                    <ul className="directory_list" style={ulStyle}>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Members</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Jobs</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Companies</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Salaries</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Universities</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Featured</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Learning</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Posts</Link></li>
                        <li className="directory_list_item"><Link to="#" className={classes.directory_link}>Jobs Hub</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Directory;
