import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAP_KEY } from "../../config/APIs";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 25.757235,
      lng: -80.379626
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: 400, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export { Map };
