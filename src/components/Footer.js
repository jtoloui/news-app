import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(2),
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        backgroundColor: '#F0F3F4',
    },
    footerText: {
        opacity: '0.6',
        textAlign: 'center',
    }
}));

const StickyFooter = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" className={classes.footerText}>&copy; Jamie Toloui 2019</Typography>
                </Container>
            </footer>
        </div>
    );
}
export default StickyFooter;