import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  Grid,
  Paper,
  makeStyles
} from "@material-ui/core";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 240,
    height: "100%",
    backgroundColor: "black",
    color: "gray",
    position: "fixed"
  }
}));

const StyledListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#5a7a9e",
      color: "white"
    },
    "&:hover": {
      backgroundColor: "#5a7a9e!important",
      color: "white"
    }
  },
  selected: {
    backgroundColor: "red",
    color: "red",
  }
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

function FormRow() {
  return (
    <>
      <Grid item xs={4}>
        <Paper>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>item</Paper>
      </Grid>
    </>
  );
}
class ListingsView extends React.Component {
  render() {
    return (
      <>
        <div>ListingsView</div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </>
    );
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

class AdminPanel extends React.Component {
  render() {
    const {view} = this.props;
    return (
      <>
        {view === 'Manage' && <ManageView />}
        {view === 'Listings' && <ListingsView />}
        {view === 'User Management' && <UserManagementView />}
        {view === 'Requests' && <RequestsView />}
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
