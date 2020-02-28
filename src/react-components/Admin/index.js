import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./styles.css";

/* Component for the Home page */
class Sidebar extends React.Component {
  render() {
    const { options, selected, onClickHandler } = this.props;
    return (
      <List disablePadding dense>
        {options.map((option, index) => (
          <ListItem
            button
            selected={selected === index}
            onClick={() => onClickHandler(index)}
          >
            <ListItemText>{option}</ListItemText>
          </ListItem>
        ))}
      </List>
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
    return (
      <div>
        <div className="sidebar">
          <Sidebar
            options={this.state.options}
            selected={this.state.selected}
            onClickHandler={this.handleListItemClick}
          />
        </div>

        <div className="admin_panel">test</div>
      </div>
    );
  }
}

export default Admin;
