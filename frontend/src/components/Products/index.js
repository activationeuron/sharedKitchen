import React, { Component } from "react";
import Layout from "../Layout";
import { connect } from "react-redux";
import { fetchKitchens } from "../../actions/index";
import BookingStatus from "./BookingStatus";
import ShowReview from "./ShowReview";
import GoogleMap from "./GoogleMap";
import KitchenShowcase from "./KitchenShowcase";

import PostReview from "./PostReviews";
import "./index.css";

class index extends Component {
  componentDidMount() {
    this.props.getKitchen(this.props.id);
  }
  render() {
    return (
      <Layout>
        <div className="jumbotron">
          <div>
            <KitchenShowcase />
          </div>
        </div>
        <BookingStatus id={this.props.id} />
        <div className="jumbotron">
          <div>
            <GoogleMap />
          </div>
          <div className="">
            <ShowReview id={this.props.match.params.id} />
          </div>

          <div>
            <PostReview
              totalStars={5}
              id={this.props.match.params.id}
              userId={this.props.auth}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToPros = ({ auth, product }, { match }) => {
  return { id: match.params.id, auth: auth.userData };
};

export default connect(
  mapStateToPros,
  { getKitchen: fetchKitchens }
)(index);
