import React from "react";
import {Link} from "react-router-dom";


class NavBar extends React.Component {

    // The sign in button does nothing
    // The onClick function, login, needs to be implemented
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
    }

    render() {
        return (
            <nav>
                <ul className={"navigation-bar"}>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/catalogue"}>Browse</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    {!this.props.loggedIn && <li><button onClick={this.props.togglePopup}>Sign-in</button></li>}
                    {this.props.loggedIn && <button>Profile</button>}
                    {/* TODO: temporary entry point of admin page
                    once sign-in pop-up is finished, this should be changed*/}
                    <li>
                        <Link to={"/admin"}>
                            <button onClick={this.login.bind(this)}>Admin</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }

    login() {
        this.setState({  
            showPopup: !this.state.showPopup  
       });  
    }
}

export default NavBar;
