import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  Grid,
  Paper,
  Select,
  FormControl,
  TextField,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import ListingsTable from "./ListingsTable";

import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 240,
    height: "100%",
    backgroundColor: "black",
    color: "gray",
    position: "fixed"
  },
  formview: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const StyledForm = withStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))(Grid);

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
    color: "red"
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
          >
            <ListItemText>{option}</ListItemText>
          </StyledListItem>
        ))}
      </List>
    </div>
  );
}

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
          // id="filled-name"
          label="Name"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          // variant="filled"
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
          <Button
            type="submit"
            // fullWidth
            // variant="contained"
            // color="primary"
            // className={classes.submit}
            onClick={this.handleSubmit}
          >
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

function createListingRow(name, total_num, rent_num, stock_num, due_num) {
  return { name, total_num, rent_num, stock_num, due_num };
}

class ListingsView extends React.Component {
  state = {
    listings: [
      createListingRow("Rune Scimitar", 200, 100, 24, 3),
      createListingRow("Rune 2 Handed Sword", 250, 9.0, 37, 4),
      createListingRow("White Party Hat", 300, 16, 24, 6),
      createListingRow("Saradomin Platebody", 305, 3, 67, 8),
      createListingRow("Royal Gala Apple", 356, 16, 49, 3)
    ]
  };

  removeListing(name) {
    this.setState({
      listings: this.state.listings.filter((l) => l.name !== name)
    });
  }
  render() {
    return (
      <>
        <Typography variant="h5">ListingsView</Typography>
        <ListingsTable
          rows={this.state.listings}
          removeListing={this.removeListing.bind(this)}
        ></ListingsTable>
      </>
    );
  }
}

class UserManagementView extends React.Component {
  render() {
    return <Typography variant="h5">UserManagementView</Typography>;
  }
}
class RequestsView extends React.Component {
  render() {
    return <Typography variant="h5">RequestsView</Typography>;
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
