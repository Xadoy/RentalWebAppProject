import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import queryString from 'query-string';

import Admin from './react-components/Admin';

/* ###################################################################################################################

Everyone should take whatever component/classes relevant to them and create a new .js file for them in the components
then import them to here. Feel free to delete/change the components, this shit scuffed.

Check list:

Homepage (sign in/register popup)               - unfinished
Catalogue                                       - unfinished
Item page                                       - unfinished
User profile                                    - unfinished
Admin page                                      - unfinished

#################################################################################################################### */

class App extends React.Component {

    // I'd like to keep all the link router here

    render() {
        return (
            <Router>
                <div className={"App"}>
                <Switch>
                    <Route path={"/admin"} exact strict render={() => 
                                (<Admin />)} />
                    <Route>
                        <NavBar/>
                        <Switch>
                            <Route path={"/"} exact strict component={Home} />
                            <Route path={"/catalogue"} exact strict component={Catalogue} />
                            <Route path={"/about"} exact strict component={About} />
                            <Route path={"/item/:item_id"} exact strict component={ItemPage} />
                            <Route path={"/search"} component={SearchResults} />
                        </Switch>
                    </Route>
                </Switch>
                </div>
            </Router>
        );
    }
}

class NavBar extends React.Component {

    // The sign in button does nothing
    // The onClick function, login, needs to be implemented

    render() {
        return (
            <nav>
                <ul className={"navigation-bar"}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/catalogue"}>Browse</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><button onClick={login}>Sign-in</button></li>
                    {/* TODO: temporary entry point of admin page
                    once sign-in pop-up is finished, this should be changed*/}
                    <li>
                        <Link to={"/admin"}>
                            <button onClick={login}>Admin</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form action={"search"}>
                    <input type={"text"} name={"value"} defaultValue={"Item/Service"}/>
                    <input type={"submit"} value={"Search"}/>
                </form>
            </div>
        )
    }
}

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_val : 'null'
        }
    }

    componentDidMount() {
        const { location: { search } } = this.props;
        const values = queryString.parse(search);
        this.setState({search_val : values["value"]});
    }

    render() {
        return (
            <div>
                <SearchBar/>
                You searched for {this.state.search_val}
            </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1> notKJJ </h1>
                <SearchBar/>
            </div>
        )
    }
}

class Catalogue extends React.Component {
    render() {
        return (
            <div>
                <SearchBar/>
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

class ItemPage extends React.Component {
    render() {
        return (
            <div>
                <SearchBar/>
                Current item: {this.props.match.params.item_id}
                <ItemPictureDisplay/>
                <ItemDescriptionPanel/>
                <ItemCommentPanel/>
                <ItemOrderPanel/>
            </div>
        )
    }
}

class ItemPictureDisplay extends React.Component {
    render() {
        return (
            <div>
                Images
            </div>
        );
    }
}

class ItemDescriptionPanel extends React.Component {
    render() {
        return (
            <div>
                Description
            </div>
        );
    }
}

class ItemCommentPanel extends React.Component {
    render() {
        return (
            <div>
                Comments
            </div>
        );
    }
}

class ItemOrderPanel extends React.Component {
    render() {
        return (
            <div>
                Order
            </div>
        );
    }
}

function login() {
    return 0;
}

export default App;
