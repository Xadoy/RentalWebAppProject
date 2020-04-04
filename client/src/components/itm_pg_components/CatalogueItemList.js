import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function CatalogueItemList({ items }) {
  const [currentItem, setCurrentItem] = useState(items[0]);
  return (
    <div className={"display-container"}>
      <u1 className={"image-choice"}>
        <li>
          {items.map((row) => (
            <div className={"img-button"}>
              <img
                className={"icon-display"}
                src={row.image.image_url}
                alt={row.name}
              />
              <button
                className={"behind-img"}
                onClick={() => setCurrentItem(row)}
              />
            </div>
          ))}
        </li>
      </u1>
      <img
        className={"large-img-display"}
        src={currentItem.image.image_url}
        alt={currentItem.name}
      />
      <h1 className={"img-name"}>
        {" "}
        <Link to={"/item/" + currentItem._id}>{currentItem.name}</Link>{" "}
      </h1>
      <p className={"img-desc"}> {currentItem.description} </p>
    </div>
  );
}

export default CatalogueItemList;
