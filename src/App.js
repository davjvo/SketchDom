import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Main, Acreditaciones, Concursos } from './screens';
import Head from './components/head';
import './App.css';

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Head />
            <Switch>
                <Route path='/concursos' component={Concursos}>
                </Route>
                <Route path='/acreditaciones' component={Acreditaciones}>
                </Route>
                <Route path='/' component={Main}>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;