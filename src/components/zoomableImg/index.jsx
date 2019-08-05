/**
 * Zoom in and out style image component
 */

import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const ZoomableImg = ({extraStyles, imageLink})=>{
  return (
    <ImageZoom
      style={extraStyles || {}}
      image={{
        src: imageLink,
        alt: 'image',
        className: 'img',
        style: { width: '100%', zIndex: 1000 }
      }}
      defaultStyles={{
        zoomContainer: { zIndex: 1000 },
        overlay: {
          /* default fallback */
          background: 'rgbrgb(102, 91, 80) transparent',
          /* modern browsers */
          backgroundColor: 'rgba(102, 91, 80,0.90000)'
        }
      }}
    />
  )
}

export { ZoomableImg }
