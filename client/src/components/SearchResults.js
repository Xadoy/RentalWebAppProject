import React from "react";
import queryString from "query-string";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

import CatalogueItemList from "./itm_pg_components/CatalogueItemList";
import { getAllValidItemsWithKeyword } from "../actions/item";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_val: "null",
      items: [],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    const {
      location: { search },
    } = this.props;
    const values = queryString.parse(search);
    const keyword = values["value"];
    getAllValidItemsWithKeyword(keyword).then((items) => {
      this.setState({ search_val: keyword, items: items });
    });
  };

  // TODO remove these results later
  render() {
    return (
      <div>
        <SearchBar />
        You searched for "{this.state.search_val}"
        {this.state.items.length > 0 && (
          <CatalogueItemList items={this.state.items}></CatalogueItemList>
        )}
      </div>
    );
  }
}

export default SearchResults;
