import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import { connect } from "react-redux";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    if (!this.props.centerForSate) {
      return <>Loading</>;
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC87yhg_FLHKPv31dgxScKhJGKsuIfDI7w" }}
          defaultCenter={this.props.centerForSate}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.centerForSate.lat}
            lng={this.props.centerForSate.lan}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => {
  if (!product.productData) {
    return null;
  }
  return {
    centerForSate: {
      lan: product.productData.longitude,
      lat: product.productData.latitude
    }
  };
};
export default connect(mapStateToProps)(GoogleMap);
