import React, { Component } from "react";

import { connect } from "react-redux";

class KitchenShowcase extends Component {
  renderContent() {
    if (!this.props.product) {
      return <div>Loading...</div>;
    }
    return (
      <div className="showCase">
        <div className="kitchen-info">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{this.props.product.name}</h5>
              <p className="card-text">City : {this.props.product.city}</p>
              <p className="card-text">
                Owners Name : {this.props.product.owner_name}
              </p>
              <a href="#" className="btn btn-primary">
                Check Booking Status
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
  render() {
    return <div>{this.renderContent()} </div>;
  }
}

const mapStateToPros = ({ product }) => {
  return { product: product.productData };
};

export default connect(mapStateToPros)(KitchenShowcase);
