import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavBar from './NavBar';

import axios from 'axios'
import config from '../config';
import NewsApi from '../API/newsApi';

const useStyles = makeStyles(() => ({
    progress: {
        position: 'absolute',
        top: '45%',
        left: '45%',
        height: '50vh',
    }
}));

const Table = lazy(() => import('./Table'));
const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        NewsApi.get()
            .then(result => setData(result.data.articles));
    }, []);
    const TechNews = () => {
        axios.get(config.TechEndpoint)
            .then(result => setData(result.data.articles));

    }
    const HomeNews = () => {
        axios.get(config.HomeNews)
            .then(result => setData(result.data.articles));
    }
    const TechCrunch = () => {
        setData([]);
        axios.get(config.techcrunch)
            .then(result => setData(result.data.articles));
    }
    const Techradar = () => {
        axios.get(config.techradar)
            .then(result => setData(result.data.articles));
    }
    const classes = useStyles();
    return (
        <Router>
            <Suspense fallback={<CircularProgress className={classes.progress} color="primary" />}>
                <Switch>
                    <Route render={() => (
                        <div>
                            <NavBar results={data.length} TechNews={TechNews} HomeNews={HomeNews} techcrunch={TechCrunch} techradar={Techradar} />
                            <Table news={data} />
                        </div>
                    )} />
                </Switch>
            </Suspense>
        </Router >
    );

}

export default App;