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
        fontSize: '0.8rem',
        marginLeft: 0,
        position: 'relative',
        color: '#fff',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }
}));

const NavBar = ({ results, TechNews, HomeNews, techcrunch, techradar }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navTitle, setnavTitle] = React.useState('Home');

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
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
                <Typography variant="h6" className={classes.title}>{`${navTitle} - Search Results ${results}`}</Typography>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.dropDown}
                >
                    Open Menu
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
                    <MenuItem onClick={TechCrunch}>Techcrunch</MenuItem>
                    <MenuItem onClick={Techradar}>Techradar</MenuItem>
                    {/* <MenuItem onClick={Tech} >Technology News</MenuItem> */}
                    {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </Menu>

            </Toolbar>
        </AppBar>

    )
}

export default NavBar;