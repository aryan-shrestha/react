import React from "react";

function Image(props) {
  return (
    <div className="image-container">
      <i
        className="fas fa-times cross"
        onClick={() => {
          props.handleRemove(props.index);
        }}
      ></i>
      <img
        src={props.image.urls.regular}
        width="100%"
        height="auto"
        alt="{props.image.title}"
      />
    </div>
  );
}

export default Image;
