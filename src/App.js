import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={"App"}>
                    <Navigation/>
                    <Switch>
                        <Route path={"/"} exact strict component={Home} />
                        <Route path={"/catalogue"} exact strict component={Catalogue} />
                        <Route path={"/about"} exact strict component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul className={"navigation-bar"}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/catalogue"}>Browse</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><button onClick={login}>Sign-in</button></li>
                </ul>
            </nav>
        )
    }
}


class Home extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type={"text"} id={"search"} name={"search"} value={"Item/Service"}/>
                    <input type={"submit"} value={"Search"}/>
                </form>
            </div>
        )
    }
}

class Catalogue extends React.Component {
    render() {
        return (
            <div>
                Catalogue page
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                About page
            </div>
        )
    }
}

function login() {
    return 0;
}


export default App;
