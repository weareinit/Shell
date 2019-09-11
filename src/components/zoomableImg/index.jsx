/**
 * Zoom in and out style image component
 */

import React from "react";
import ImageZoom from "react-medium-image-zoom";

const ZoomableImg = ({
  extraStyles,
  imageLink,
  styleOverride,
  zoomContainer,
  ...rest
}) => {
  return (
    <ImageZoom
      {...rest}
      image={{
        src: imageLink,
        alt: "image",
        className: "img",
        style: { width: "100%", ...extraStyles }
      }}
      defaultStyles={{
        zoomContainer: { ...zoomContainer },
        overlay: {
          /* default fallback */
          background: "rgb(102, 91, 80) transparent",
          /* modern browsers */
          backgroundColor: "rgba(102, 91, 80,0.90000)"
        },
        ...styleOverride
      }}
    />
  );
};

export { ZoomableImg };
