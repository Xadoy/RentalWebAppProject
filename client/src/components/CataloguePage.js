import React, { useState } from "react";
import {
  // withStyles,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import CatalogueItemList from "./itm_pg_components/CatalogueItemList";
import { getAllValidItems } from "../actions/item";
import { addItemRequestImage, addItemRequest } from "../actions/itemRequest";

import { useInput } from "./Utility";
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
        <AddItemRequestForm />
      </>
    );
  }
}
function AddItemRequestForm() {
  const [error, setError] = useState();
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const {
    value: totalNum,
    bind: bindTotalNum,
    reset: resetTotalNum,
  } = useInput("");
  const {
    value: dailyCost,
    bind: bindDailyCost,
    reset: resetDailyCost,
  } = useInput("");
  const {
    value: description,
    bind: bindDescription,
    reset: resetDescription,
  } = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = await addItemRequestImage(event.target).catch((error) => {
      setError(error.response.data);
      return;
    });
    const itemReq = {
      dailyCost,
      name,
      totalNum,
      description,
      image,
    };
    const res = await addItemRequest(itemReq).catch((error) =>
      setError(error.response.data)
    );

    resetName();
    resetTotalNum();
    resetDescription();
    resetDailyCost();
    event.target.reset();
  };
  if (error) throw error;
  return (
    <>
      <Grid>
        <TextField label="Listing Name" name="new_req_name" {...bindName} />
        <TextField
          label="Total"
          name="new_req_total"
          type="number"
          {...bindTotalNum}
        />
        <TextField
          label="Description"
          name="new_req_desc"
          {...bindDescription}
        />
        <TextField
          label="Daily Cost"
          name="new_req_cost"
          type="number"
          {...bindDailyCost}
        />
      </Grid>
      <form className="image-form" onSubmit={handleSubmit}>
        <div class="image-form__field">
          <label>Image:</label>
          <input name="image" type="file" />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="image-form__submit-button"
        >
          Upload
        </Button>
      </form>
    </>
  );
}
export default Catalogue;
