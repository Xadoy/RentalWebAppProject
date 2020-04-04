import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  withStyles,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import { pink } from '@material-ui/core/colors';
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 240,
    height: "100%",
    backgroundColor: "black",
    color: "gray",
    position: "fixed",
  },
  formview: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const StyledListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#5a7a9e",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#5a7a9e!important",
      color: "white",
    },
  },
  selected: {
    backgroundColor: "red",
    color: "red",
  },
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
        <Link to='/' >
        <StyledListItem button>
          <ListItemIcon>
            <HomeIcon style={{ color: pink[500] }}/>
          </ListItemIcon>
        </StyledListItem>
        </Link>
      </List>
    </div>
  );
}
