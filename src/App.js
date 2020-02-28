import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Item from "./components/ItemPage";
import SearchResults from "./components/SearchResults";
import About from "./components/AboutPage";
import Catalogue from "./components/CataloguePage";
import Home from "./components/HomePage";
import NavBar from "./components/NavigationBar";
import Admin from "./react-components/Admin";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
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
  // I'd like to keep all the link routing here
  render() {
    return (
      <Router>
        <div className={"App"}>
          {history.location.pathname !== "/admin" && <NavBar />}

          <Switch>
            <Route path={"/"} exact strict component={Home} />
            <Route path={"/catalogue"} exact strict component={Catalogue} />
            <Route path={"/about"} exact strict component={About} />
            <Route path={"/item/:item_id"} exact strict component={Item} />
            <Route path={"/search"} component={SearchResults} />
            <Route path={"/admin"} exact strict render={() => <Admin />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
