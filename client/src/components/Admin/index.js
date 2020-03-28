import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import { ListingsTable, UsersTable, RequestTable } from "./Table";
import { getItems, addItem, delItem } from "../../actions/item";
import "./styles.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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

// reference: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

function AddListingForm({ afterSubmit }) {
  const [error, setError] = useState();
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const {
    value: totalNum,
    bind: bindTotalNum,
    reset: resetTotalNum
  } = useInput("");
  const {
    value: description,
    bind: bindDescription,
    reset: resetDescription
  } = useInput("");

  const handleSubmit = async event => {
    event.preventDefault();
    const item = {
      name,
      totalNum,
      description
    };
    const response = await addItem(item).catch(error => setError(error.response.data));
    resetName();
    resetTotalNum();
    resetDescription();
    afterSubmit();
  };
  if (error) throw error;
  return (
    <StyledForm>
      <TextField label="Listing Name" name="new_listing_name" {...bindName} />
      <TextField
        label="Total"
        name="new_listing_total"
        type="number"
        {...bindTotalNum}
      />
      <TextField
        label="Description"
        name="new_listing_description"
        {...bindDescription}
      />
      <div>
        <Button type="submit" onClick={handleSubmit}>
          Add Listing
        </Button>
      </div>
    </StyledForm>
  );
}

class ListingsView extends React.Component {
  state = {
    listings: []
  };
  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    getItems().then(items => {
      this.setState({ listings: items });
    });
  };

  removeListing(id) {
    delItem(id).then(items => {
      this.refreshList();
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
        <Typography variant="h6">Add new listing</Typography>
        <AddListingForm afterSubmit={this.refreshList}></AddListingForm>
      </>
    );
  }
}

function createUserRow(name, last_login, score, create_at) {
  return { name, last_login, score, create_at };
}

class UserManagementView extends React.Component {
  state = {
    users: [
      createUserRow("user1", "20190910", 10, "20150910"),
      createUserRow("user2", "20170820", 10, "20170215"),
      createUserRow("user3", "20160530", 8, "20130211"),
      createUserRow("user4", "20190313", 3, "20190113"),
      createUserRow("user5", "20200220", 9, "20200120")
    ]
  };

  removeUser(name) {
    this.setState({
      users: this.state.users.filter(u => u.name !== name)
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

// reference: https://material-ui.com/components/dialogs/
function ErrorPrompt({ open, onClose, errorInfo }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Error"}</DialogTitle>
      <DialogContent>
        <DialogContentText>{errorInfo}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// reference: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      console.log(this.state.error)
      return (
        <>
          {this.props.children}
          <ErrorPrompt
            open={true}
            onClose={() => {
              this.setState({ error: null, errorInfo: null });
            }}
            errorInfo={this.state.error ? this.state.error.toString() : 'Something went wrong.'}
          />
        </>
      );
    }
    // Normally, just render children
    return this.props.children;
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
