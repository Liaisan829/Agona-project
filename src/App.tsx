import './App.css';
import Auth from './pages/Auth';
import Regis from './pages/Regis';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {

    return (
        <Router>
            <Switch>
                <Route path="/authorization" exact component={Auth}/>
                <Route path="/registration" exact component={Regis}/>
            </Switch>
        </Router>
    );
}

export default App;
