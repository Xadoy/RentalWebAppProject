import React from "react";
import { UsersTable } from "./Table";
import { Typography } from "@material-ui/core";
import { getAllValidUsers, delUser } from "../../actions/user";

class UserManagementView extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    getAllValidUsers().then(users => {
      this.setState({ users: users });
    });
  };

  removeUser(id) {
    delUser(id).then(users => {
      this.refreshList();
    });
  }

  render() {
    return (
      <>
        <Typography variant="h5">UserManagementView</Typography>
        <UsersTable
          rows={this.state.users}
          removeUser={this.removeUser.bind(this)}
        />
      </>
    );
  }
}
export default UserManagementView;
