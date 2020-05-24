import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './opening.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Tabs, Tab, TextField, InputAdornment, } from '@material-ui/core';
import { SearchIcon } from '@material-ui/icons/Search';
import { RoomOutlinedIcon } from '@material-ui/icons/RoomOutlined';
import { Link } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

function Opening() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Jobs" />
                <Tab label="People" />
                <Tab label="Learning" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TextField placeholder="Search job title or companies" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} /><br /><br />
                <TextField placeholder="Search job title or companies" variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <RoomOutlinedIcon />
                        </InputAdornment>
                    ),
                }} />
                <Link to="#" className="pill_button pill_blue">Search Jobs</Link>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TextField placeholder="First Name" variant="outlined" /><br /><br />
                <TextField placeholder="Last Name" variant="outlined" />
                <Link to="#" className="pill_button pill_blue">Search People</Link>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TextField placeholder="Search skills, skills or software" variant="outlined" />
                <Link to="#" className="pill_button pill_blue">Search Learning</Link>
            </TabPanel>
        </div>
    );
}

export default Opening;