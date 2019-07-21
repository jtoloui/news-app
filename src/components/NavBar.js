import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    makeStyles,
    Typography
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CountUp from 'react-countup';
import { Cached } from '@material-ui/icons';
import '../scss/refreshBtn.scss';

const useStyles = makeStyles(theme => ({
    NavBar: {
        textAlign: 'center',
        maxHeight: '64px',
    },
    title: {
        fontSize: '1rem',
        flexGrow: 1,
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    dropDown: {
        fontSize: '13px',
        marginLeft: 4,
        padding: "0 10px",
        position: 'relative',
        color: '#fff',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',

        },
    },
    reload: {
        // height: '1.5em',
        // width: '1.5em'
    }

}));

const NavBar = ({ results, TechNews, HomeNews, techcrunch, techradar, NextWeb, reload, reloadState, reloadCSS }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navTitle, setnavTitle] = React.useState('Home');
    console.log(reloadState);

    const reloader = () => {
        reload();
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const Tech = () => {
        TechNews();
        setnavTitle('Latest Tech News')
        setAnchorEl(null);
    }
    const Home = () => {
        HomeNews();
        setnavTitle('Home')
        setAnchorEl(null);
    }
    const TechCrunch = () => {
        techcrunch();
        setnavTitle('TechCrunch')
        setAnchorEl(null);
    }
    const Techradar = () => {
        techradar();
        setnavTitle('TechRadar')
        setAnchorEl(null);
    }

    return (

        <AppBar>
            <Toolbar className={classes.NavBar}>
                <Button disabled={reloadState} className='reload-data' onClick={reloader}>
                    <Cached className={`reload-${reloadCSS} ${classes.reload}`} />
                </Button>
                <Typography variant="h6" className={classes.title}>
                    {`${navTitle} - Search Results `}
                    <CountUp
                        start={0}
                        end={results}
                        duration={2}
                        decimals={0}
                    />
                </Typography>
                <Button
                    variant="outlined"
                    color="inherit"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.dropDown}
                >
                    Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={Home}>Home</MenuItem>
                    <MenuItem onClick={Tech}>Technology News</MenuItem>
                    <MenuItem onClick={TechCrunch}>TechCrunch</MenuItem>
                    <MenuItem onClick={Techradar}>TechRadar</MenuItem>
                    <MenuItem onClick={NextWeb}>The Next Web</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar;