import React from "react";
import {
  // withStyles,
  // Grid,
  // TextField,
  // Button,
  Typography,
} from "@material-ui/core";
import CatalogueItemList from "./itm_pg_components/CatalogueItemList";
import { getAllValidItems } from "../actions/item";
class Catalogue extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    getAllValidItems().then((items) => {
      this.setState({ items: items });
    });
  };

  render() {
    return (
      <>
        <Typography variant="h5">Catalogue page</Typography>
        {this.state.items.length > 0 && (
          <CatalogueItemList items={this.state.items}></CatalogueItemList>
        )}
      </>
    );
  }
}

export default Catalogue;
