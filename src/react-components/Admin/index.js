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
      <form>
        {/* <InputLabel>Age</InputLabel>
          Pick your favorite flavor:
          <Select
            name="test"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </Select> */}

        <TextField
          // id="filled-name"
          label="Name"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          // variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          variant="filled"
        />
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
      </form>
    );
  }
}

class ManageView extends React.Component {
  render() {
    return (
      <>
        <div>ManageView</div>
        <AdminProfileForm
          onSubmit={this.props.onChange}
          username={this.props.username}
          password={this.props.password}
        />
      </>
    );
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
