import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Typography,
    InputBase,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CountUp from 'react-countup';
import { Cached } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';


import '../scss/refreshBtn.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontSize: '1rem',
        flexGrow: 1,
        display: 'none',
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    NavBar: {
        textAlign: 'center',
        maxHeight: '100px',
    },
    mainNav: {
        margin: '1.5% 1.5%',
        width: '97%',
        [theme.breakpoints.up('sm')]: {
            margin: '0.5% 0.5%',
            width: '99%',
        },
    },
    dropDown: {
        fontSize: '13px',
        marginRight: '21px',
        marginLeft: '6px',
        position: 'relative',
        color: '#fff',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 'auto',
            width: 'auto',

        },
    },
}));


const NavBar = ({ ArticleCount, NewSource, reload, reloadState, reloadCSS, onSearchSubmit }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [navTitle, setnavTitle] = React.useState('Home');
    const [searchValue, setSearchValue] = React.useState('');

    const onInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();

        onSearchSubmit(searchValue);
    };

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
        NewSource('Technology');
        setnavTitle('Latest Tech News')
        setAnchorEl(null);
    }
    const Home = () => {
        NewSource('Home');
        setnavTitle('Home')
        setAnchorEl(null);
    }
    const TechCrunch = () => {
        NewSource('TechCrunch');
        setnavTitle('TechCrunch')
        setAnchorEl(null);
    }
    const Techradar = () => {
        NewSource('TechRadar');
        setnavTitle('TechRadar')
        setAnchorEl(null);
    }
    const NextWeb = () => {
        NewSource('NextWeb');
        setnavTitle('The Next Web')
        setAnchorEl(null);
    }


    return (

        <div className={classes.root}>
            <AppBar className={classes.mainNav}>
                <Toolbar className={classes.NavBar}>
                    <Button disabled={reloadState} className='reload-data' onClick={reloader}>
                        <Cached className={`reload-${reloadCSS} ${classes.reload}`} />
                    </Button>
                    <Typography variant="h6" className={classes.title}>
                        {`${navTitle} - Search Results `}
                        <CountUp
                            start={0}
                            end={ArticleCount}
                            duration={2}
                            decimals={0}
                        />
                    </Typography>

                    <Button
                        // variant="outlined"
                        // color="primary"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        // color="secondary"
                        className={classes.dropDown}
                    >
                        Categories
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
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={onFormSubmit} className="ui form">

                            <InputBase

                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'Search' }}
                                value={searchValue}
                                onChange={onInputChange}
                            />
                        </form>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;