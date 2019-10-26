import React, { Component } from "react";
import Layout from "../Layout";
import { connect } from "react-redux";
import { fetchKitchens, fetchBookingInfo } from "../../actions/index";
import KitchenShowcase from "./KitchenShowcase";
class index extends Component {
  componentDidMount() {
    this.props.getKitchen(this.props.id);
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div className="jumbotron">
          <div>
            <KitchenShowcase />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToPros = ({ auth }, { match }) => {
  return { id: match.params.id };
};

export default connect(
  mapStateToPros,
  { getKitchen: fetchKitchens }
)(index);
