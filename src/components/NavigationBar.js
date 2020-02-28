import React from "react";
import {Link} from "react-router-dom";

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
                    <li><button onClick={this.login}>Sign-in</button></li>
                </ul>
            </nav>
        )
    }
    login() {
        return 0;
    }
}

export default NavBar;
