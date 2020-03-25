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
  constructor(props){  
    super(props);  
    this.state = { showPopup: false, loggedIn: false };  
    }
   
    togglePopup() {
        this.setState({  
            showPopup: !this.state.showPopup
       });  
    }

    login() {
        this.setState({  
            loggedIn: !this.state.loggedIn
       });  
    }

  render() {
    const notInAdmin = /^(?!.*(\/admin)).*$/;
    return (
      <Router>
        <div className={"App"}>
          <Route path={notInAdmin} exact strict render={() => <NavBar togglePopup={this.togglePopup.bind(this)} 
                                                                    loggedIn={this.state.loggedIn}
                                                                    logout={this.login.bind(this)}/>}/>
          <Switch>
            <Route path={"/"} exact strict component={Home} />
            <Route path={"/catalogue"} exact strict component={Catalogue} />
            <Route path={"/about"} exact strict component={About} />
            <Route path={"/item/:item_id"} exact strict component={Item} />
            <Route path={"/search"} component={SearchResults} />
            <Route path={"/admin"} exact strict render={() => <Admin />} />
          </Switch>
            {/* <button onClick={this.login.bind(this)}>Sign-in</button> */}
            {this.state.showPopup && <Popup closePopup={this.togglePopup.bind(this)}
                                            login={this.login.bind(this)}/>}  
          
        </div>
      </Router>
    );
  }
  
}

export default App;
