import React from "react";
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

export default function Sidebar({ options, selected, onClickHandler }) {
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
