import React from "react";

function Desc({ description }) {
  return (
    <div className={"desc-container"}>
      <p>
        {description}
      </p>
    </div>
  );
}

export default Desc;
