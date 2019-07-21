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
    const [call, setCall] = React.useState(null);
    const [reloadState, setReloadState] = React.useState(true);
    const [reloadCSS, setReloadCSS] = React.useState('disabled');

    const reload = () => {
        axios.get(call).then(result => setData(result.data.articles));
    }
    useEffect(() => {
        NewsApi.get()
            .then(result => setData(result.data.articles));
    }, []);
    const fetchSource = (source) => {
        switch (source) {
            case 'Home':
                axios.get(config.HomeNews)
                    .then(result => setData(result.data.articles));
                setCall(config.HomeNews);
                setReloadState(false);
                setReloadCSS('active');
                break;
            case 'Technology':
                axios.get(config.TechEndpoint)
                    .then(result => setData(result.data.articles));
                setCall(config.HomeNews);
                setReloadState(false);
                setReloadCSS('active');
                break;
            case 'TechCrunch':
                setData([]);
                axios.get(config.techcrunch)
                    .then(result => setData(result.data.articles));
                setCall(config.techcrunch);
                setReloadState(false);
                setReloadCSS('active');
                break;
            case 'TechRadar':
                axios.get(config.techradar)
                    .then(result => setData(result.data.articles));
                setCall(config.techradar);
                setReloadState(false);
                setReloadCSS('active');
                break;
            case 'NextWeb':
                axios.get(config.NextWeb)
                    .then(result => setData(result.data.articles));
                setCall(config.NextWeb);
                setReloadState(false);
                setReloadCSS('active');
                break;
            default:
                break;
        }
    }
    
    const classes = useStyles();
    return (
        <Router>
            <Suspense fallback={<CircularProgress className={classes.progress} color="primary" />}>
                <Switch>
                    <Route render={() => (
                        <div>
                            <NavBar
                                ArticleCount={data.length}
                                NewSource={fetchSource}
                                reload={reload}
                                reloadState={reloadState}
                                reloadCSS={reloadCSS}
                            />
                            <Table news={data} />
                        </div>
                    )} />
                </Switch>
            </Suspense>
        </Router >
    );

}

export default App;