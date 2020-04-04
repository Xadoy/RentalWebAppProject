import React from "react";

function Pics({ image_url, name }) {
  return (
    <div className={"display-container"}>
      <ul className={"image-choice"}>
        <li>
          <div className={"img-button"}></div>
        </li>
      </ul>
      <img className={"large-img-display"} src={image_url} alt={name} />
    </div>
  );
}
export default Pics;
