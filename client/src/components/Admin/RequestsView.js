import React from "react";
import { RequestTable } from "./Table";
import { Typography } from "@material-ui/core";
import { delItemRequest, getAllItemRequests } from "../../actions/itemRequest";
import { addItem } from "../../actions/item";

class RequestsView extends React.Component {
  state = {
    reqs: [],
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    getAllItemRequests().then((reqs) => {
      this.setState({ reqs: reqs });
    });
  };

  approveRequest(req) {
    const { name, description, totalNum, image, dailyCost } = req;
    const item = {
      name,
      description,
      totalNum,
      image,
      dailyCost,
    };
    addItem(item).then((item) => {
      delItemRequest(req._id).then((req) => {
        this.refreshList();
      });
    });
  }

  render() {
    return (
      <>
        <Typography variant="h5">UserManagementView</Typography>
        <RequestTable
          rows={this.state.reqs}
          approveRequest={this.approveRequest.bind(this)}
        />
      </>
    );
  }
}
export default RequestsView;
