import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import { Main, Acreditaciones, Concursos, Alley, Program, Invited } from './screens';
import Head from './components/head';
import './App.css';

const history = createBrowserHistory();

ReactGA.initialize('UA-177615226-1');
history.listen(location => ReactGA.pageview(location.pathname));
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