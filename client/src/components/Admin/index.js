import React, { useState } from "react";
import {
  withStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import { RequestTable } from "./Table";
import ErrorBoundary from "../ErrorBoundary";
import Sidebar from "./SideBar";
import ListingsView from "./ListingsView";
import UserManagementView from "./UserManagementView";
import "./styles.css";

const StyledForm = withStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))(Grid);

class AdminProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: props.username, password: props.password };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
    // this.handleSubmit submitHandler()
  }
  render() {
    return (
      <StyledForm>
        <TextField
          label="Name"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          // variant="filled"
        />
        <div>
          <Button type="submit" onClick={this.handleSubmit}>
            Save
          </Button>
        </div>
      </StyledForm>
    );
  }
}

class ManageView extends React.Component {
  render() {
    return (
      <>
        <Typography variant="h5">ManageView</Typography>
        <AdminProfileForm
          onSubmit={this.props.onChange}
          username={this.props.username}
          password={this.props.password}
        />
      </>
    );
  }
}

function createRequestRow(name, request_count, price) {
  return { name, request_count, price };
}
class RequestsView extends React.Component {
  state = {
    requests: [
      createRequestRow("Rune Scimitar", 200, 100),
      createRequestRow("Rune 2 Handed Sword", 250, 98),
      createRequestRow("White Party Hat", 300, 16),
      createRequestRow("Saradomin Platebody", 305, 3),
      createRequestRow("Royal Gala Apple", 356, 16)
    ]
  };
  approveRequest(name) {
    this.setState({
      requests: this.state.requests.filter(r => r.name !== name)
    });
  }
  render() {
    return (
      <>
        <Typography variant="h5">RequestsView</Typography>
        <RequestTable
          rows={this.state.requests}
          approveRequest={this.approveRequest.bind(this)}
        />
      </>
    );
  }
}

class AdminPanel extends React.Component {
  state = {
    username: "admin",
    password: "password"
  };
  handleSubmit(username, password) {
    this.setState({ username: username, password: password });
  }
  render() {
    const { view } = this.props;
    return (
      <>
        <ErrorBoundary>
          {view === "Manage" && (
            <ManageView
              username={this.state.username}
              password={this.state.password}
              onChange={this.handleSubmit.bind(this)}
            />
          )}
          {view === "Listings" && <ListingsView />}
          {view === "User Management" && <UserManagementView />}
          {view === "Requests" && <RequestsView />}
        </ErrorBoundary>
      </>
    );
  }
}

class Admin extends React.Component {
  state = {
    options: ["Manage", "Listings", "User Management", "Requests"],
    selected: 0
  };

  handleListItemClick = index => {
    this.setState({
      selected: index
    });
  };

  render() {
    const currentView = this.state.options[this.state.selected];
    return (
      <>
        <Sidebar
          options={this.state.options}
          selected={this.state.selected}
          onClickHandler={this.handleListItemClick}
        />
        <div className="admin_panel">
          <AdminPanel view={currentView} />
        </div>
      </>
    );
  }
}

export default Admin;
