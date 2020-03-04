import React from 'react';
import Pics from "./itm_pg_components/ItemPictureDisplay";
import Desc from "./itm_pg_components/ItemDescriptionPanel";
import Comments from "./itm_pg_components/ItemCommentPanel";
import Order from "./itm_pg_components/ItemOrderPanel";

class Item extends React.Component {
    render() {
        return (
            <div>
                Current item: {this.props.match.params.item_id}
                <Pics/>
                <Order/>
                <Desc/>
                {/*TODO pass user/loggedInState to here later on*/ }
                <Comments user={"current user"} />
            </div>
        )
    }
}


export default Item;
