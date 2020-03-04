import React from "react";
import SearchBar from "./SearchBar";
import Pics from "./itm_pg_components/CatalogueItemList";
import Desc from "./itm_pg_components/ItemDescriptionPanel";
import Comments from "./itm_pg_components/ItemCommentPanel";
import Order from "./itm_pg_components/ItemOrderPanel";
//import { Link } from "react-router-dom";

class Catalogue extends React.Component {
    render() {
        return (
            <div>
                <SearchBar/>
                Catalogue page
                Current item: {this.props.match.params.item_id}
                <Pics/>

            </div>
        )
    }
}

export default Catalogue;
