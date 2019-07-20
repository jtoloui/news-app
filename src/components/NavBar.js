import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    NavBar: {
        textAlign: 'center',
        maxHeight: '64px',

    }
}));

const NavBar = ({ results }) => {
    const classes = useStyles();

    return (

        <AppBar>
            <Toolbar className={classes.NavBar}>
            <Typography variant="h6">Tech News - Search Results {results}</Typography>

                
            </Toolbar>
        </AppBar>

    )
}

export default NavBar;