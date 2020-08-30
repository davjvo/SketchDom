import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Main, Acreditaciones, Concursos, Alley, Program, Invited } from './screens';
import Head from './components/head';
import './App.css';

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Head />
            <Switch>
                <Route path='/invitados' component={Invited} />
                <Route path='/programa' component={Program} />
                <Route path='/alley' component={Alley} />
                <Route path='/concursos' component={Concursos} />
                <Route path='/acreditaciones' component={Acreditaciones} />
                <Route path='/' component={Main} />
            </Switch>
        </Router>
    );
}

export default App;