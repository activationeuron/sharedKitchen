import React, { Component } from "react";
import "./index.css";

import { connect } from "react-redux";

class KitchenShowcase extends Component {
  renderContent() {
    console.log(this.props.product.imagekey);
    if (!this.props.product) {
      return <div>Loading...</div>;
    }
    return (
      <div className="showCase">
        <div>Aasasasas</div>

        <img src={`${this.props.product.imagekey}/kitchen/kitchen1.jpg`}></img>
      </div>
    );
  }
  render() {
    console.log(this.props);
    return <div>{this.renderContent()} </div>;
  }
}

const mapStateToPros = ({ product }) => {
  return { product: product.productData };
};

export default connect(mapStateToPros)(KitchenShowcase);
