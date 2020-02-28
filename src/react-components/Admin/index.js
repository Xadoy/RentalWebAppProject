import React from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import "./styles.css";

/* Component for the Home page */
class Sidebar extends React.Component {

  render() {
    const { options, selected } = this.props;
    return (
      <div className="sidebar">
        <List disablePadding dense>
          {options.map((option) => (
          <ListItem button>
            <ListItemText>{option}</ListItemText>
          </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

class Admin extends React.Component {
  state = {
    options: ['Manage', 'Listings', 'User Management', 'Requests'],
    selected: 0
  }

  render() {
    return (
      <Sidebar options={this.state.options} selected = {this.state.selected}/>
    );
  }
}

export default Admin;
