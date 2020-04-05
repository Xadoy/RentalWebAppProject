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

  // reference:https://stackoverflow.com/questions/46240647/react-how-can-i-force-render-a-function-component
  const [updateNow, setUpdateNow] = useState(true)

  const updateFunc = () => {
    setUpdateNow(!updateNow)
  }

  useEffect(() => {
    getItem(item_id).then(item => {
      setItem(item);
    });
  }, [item_id, updateNow]);


  if (!item) return <div>loading...</div>
  return (
    <div>
      Current Item: {item.name}
      <Pics image_url={item.image.image_url} name={item.name}/>
      <Order item_id={item._id} unitCost={item.dailyCost}/>
      <Desc description={item.description}/>
      <Comments item_id={item._id} comments={item.comments} afterSubmit={updateFunc}/>
    </div>
  );
}

export default Item;
