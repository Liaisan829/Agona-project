import './pages/Auth.css';
import './pages/Regis.css'
import Auth from './pages/Auth';
import Regis from './pages/Regis';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './pages/Main.css'
import Main from "./pages/Main";

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/authorization" exact component={Auth}/>
                <Route path="/registration" exact component={Regis}/>
            </Switch>
        </Router>
    );
}

export default App;
