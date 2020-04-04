import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pics from "./itm_pg_components/ItemPictureDisplay";
import Desc from "./itm_pg_components/ItemDescriptionPanel";
import Comments from "./itm_pg_components/ItemCommentPanel";
import Order from "./itm_pg_components/ItemOrderPanel";

import {getItem} from "../actions/item";

function Item() {
  const { item_id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(item_id).then(item => {
      console.log(item)
      setItem(item);
    });
  }, [item_id]);


  if (!item) return <div>loading...</div>
  return (
    <div>
      Current Item: {item.name}
      <Pics image_url={item.image.image_url} name={item.name}/>
      <Order item_id={item._id}/>
      <Desc description={item.description}/>
      <Comments item_id={item._id} comments={item.comments}/>
    </div>
  );
}

export default Item;
