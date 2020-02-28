import React from "react";
import { Link } from "react-router-dom";

/* Component for the Home page */
class Admin extends React.Component {
  state = {
    options: ['Manage', 'Listings', 'User Management', 'Requests'],
    selected: 0
  }

  render() {
    return (
      <div>
        <Link to={"test"}>
        test
        </Link>
      </div>
    );
  }
}

export default Admin;
