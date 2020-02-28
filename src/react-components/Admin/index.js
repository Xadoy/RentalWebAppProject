import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  makeStyles
} from "@material-ui/core";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 240,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "fixed"
  }
}));

const StyledListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "red"
    }
  },
  selected: {}
})(ListItem);

function Sidebar({ options, selected, onClickHandler }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List disablePadding dense>
        {options.map((option, index) => (
          <StyledListItem
            button
            key={option}
            selected={selected === index}
            onClick={() => onClickHandler(index)}
            className={{ selected: classes.mui }}
          >
            <ListItemText>{option}</ListItemText>
          </StyledListItem>
        ))}
      </List>
    </div>
  );
}

class ManageView extends React.Component {
  render() {
    return <div>ManageView</div>;
  }
}
class ListingsView extends React.Component {
  render() {
    return <div>ListingsView</div>;
  }
}
class UserManagementView extends React.Component {
  render() {
    return <div>UserManagementView</div>;
  }
}
class RequestsView extends React.Component {
  render() {
    return <div>RequestsView</div>;
  }
}

function AdminPanel({ view }) {
  switch (view) {
    default:
      return null;

    case "Manage":
      return <ManageView />;
    case "Listings":
      return <ListingsView />;
    case "User Management":
      return <UserManagementView />;
    case "Requests":
      return <RequestsView />;
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
      <div>
        <Sidebar
          options={this.state.options}
          selected={this.state.selected}
          onClickHandler={this.handleListItemClick}
        />
        <div className="admin_panel">
          <AdminPanel view={currentView} />
        </div>
      </div>
    );
  }
}

export default Admin;
