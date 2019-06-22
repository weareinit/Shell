import React from "react";
import ImageZoom from "react-medium-image-zoom";

function ZoomableImg(props) {
  console.log(props.imageLink);

  return (
    <ImageZoom
      style={{ margin: 20 }}
      image={{
        src: props.imageLink,
        alt: "Golden Gate Bridge",
        className: "img",
        style: { width: "50em" }
      }}
      zoomImage={{
        src: props.imageLink,
        alt: "Golden Gate Bridge"
      }}
    />
  );
}

export default ZoomableImg;
