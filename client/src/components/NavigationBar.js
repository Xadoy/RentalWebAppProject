import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  // The sign in button does nothing
  // The onClick function, login, needs to be implemented
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul className={"navigation-bar"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/catalogue"}>Browse</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!this.props.currentUser && (
            <li>
              <button onClick={this.props.togglePopup}>Sign-in</button>
            </li>
          )}
          {this.props.currentUser && this.props.currentUser !== "admin" && (
            <li>
              <button onClick={this.props.logout}>Log out</button>
            </li>
          )}
          {/* TODO: temporary entry point of admin page
                    once sign-in pop-up is finished, this should be changed*/}
          {this.props.currentUser && this.props.currentUser === "admin" && (
            <li>
              <Link to={"/admin"}>
                <button>Admin</button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
