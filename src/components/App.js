import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const reload = () => {
            NewsApi.get()
                .then(result => setData(result.data.articles));
    }
    const classes = useStyles();
    return (
        <Router>
            <Suspense fallback={<CircularProgress className={classes.progress} color="primary" />}>
                <Switch>
                    <Route render={() => (
                        <Table news={data} reload={reload} />
                    )} />
                </Switch>
            </Suspense>
        </Router >
    );

}

export default App;