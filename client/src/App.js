import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Item from "./components/ItemPage";
import SearchResults from "./components/SearchResults";
import About from "./components/AboutPage";
import Catalogue from "./components/CataloguePage";
import Home from "./components/Home";
import NavBar from "./components/NavigationBar";
import Admin from "./components/Admin";

import Popup from "./popup.js";
import { checkSession, logout } from "./actions/session";
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
  constructor(props) {
    super(props);
    this.state = { showPopup: false, loggedIn: false, currentUser: null };
  }

  checkUserSession = () => {
    checkSession().then((user) => {
      console.log(user)
      this.setState({ currentUser: user });
    }).catch(err => {});
  }

  userLogOut = () => {
    logout().then((res) => {
      console.log(res)
      this.setState({ currentUser: null });
    }).catch(err => {});
  }

  componentDidMount() {
    this.checkUserSession();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    const notInAdmin = /^(?!.*(\/admin)).*$/;
    return (
      <Router>
        <div className={"App"}>
          <Route
            path={notInAdmin}
            exact
            strict
            render={() => (
              <NavBar
                togglePopup={this.togglePopup.bind(this)}
                currentUser={this.state.currentUser}
                logout={this.userLogOut}
              />
            )}
          />
          <Switch>
            <Route path={"/"} exact strict component={Home} />
            <Route path={"/catalogue"} exact strict component={Catalogue} />
            <Route path={"/about"} exact strict component={About} />
            <Route path={"/item/:item_id"} exact strict component={Item} />
            <Route path={"/search"} component={SearchResults} />
            <Route path={"/admin"} exact strict render={() => <Admin />} />
            <Route render={() => <div>404 Not found</div>} />
          </Switch>
          {this.state.showPopup && (
            <Popup
              closePopup={this.togglePopup.bind(this)}
              login={this.checkUserSession}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
