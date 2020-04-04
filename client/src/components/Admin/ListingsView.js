
import React, { useState } from "react";
import { getAllValidItems, addItem, delItem } from "../../actions/item";
import { ListingsTable } from "./Table";
import {
  withStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import { useInput } from "../Utility"

const StyledForm = withStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))(Grid);

// reference: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
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
    const image = {
      image_url: "http://res.cloudinary.com/dhjsvs4sg/image/upload/v1585792310/Mystery_Item_530x_2x_msqahv.png",
      image_id: "Mystery_Item_530x_2x_msqahv"
    }
    const item = {
      name,
      totalNum,
      description,
      image
    };
    const response = await addItem(item).catch(error =>
      setError(error.response.data)
    );
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
    getAllValidItems().then(items => {
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
export default ListingsView;
