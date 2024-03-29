import Auth from './pages/Login/Auth/Auth';
import Regis from './pages/Login/Regis/Regis';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Redirect, Router} from 'react-router';
import Main from "./pages/MainPage/Main";
import {Provider} from 'mobx-react';
import {createBrowserHistory} from 'history';
import {mainStore} from "./store/MainStore/MainStore";
import {FilmPage} from "./pages/FilmPage/FilmPage";
import {FilmsPage} from './pages/FilmsPage/FilmsPage';

const history = createBrowserHistory();

function App() {

    return (
        <Router history={history}>
            <Provider {...mainStore}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/authorization" exact component={Auth}/>
                        <Route path="/registration" exact component={Regis}/>
                        <Route path="/collection" exact component={FilmsPage}/>
                        <Route path="/collection/:id" exact component={FilmPage}/>
                        <Redirect to="/collection"/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </Router>
    );
}

export default App;
