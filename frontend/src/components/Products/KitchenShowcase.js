import React, { Component } from "react";

import { connect } from "react-redux";

class KitchenShowcase extends Component {
  renderContent() {
    if (!this.props.product) {
      return <div>Loading...</div>;
    }
    return (
      <div className="row">
        <div className="card text-center w-50 ml-10">
          <div className="card-body ">
            <h5 className="card-title">{this.props.product.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.product.city}-{this.props.product.category}
            </h6>
            <b className="card-text text-muted">{this.props.product.address}</b>
          </div>
        </div>
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
