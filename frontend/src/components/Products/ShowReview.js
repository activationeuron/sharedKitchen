import React from "react";
import { connect } from "react-redux";
import { fetchReview } from "../../actions/index";

import "./index.css";

class ShowReview extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.id);
  }

  //   renderReview() {
  //     return this.state.data.map(el => {
  //       return <div>{el.reviews}</div>;
  //     });
  //   }

  renderReview() {
    return this.props.reviews.map(review => {
      return (
        <div className="reviews-members pt-2 pb-4" key={review.review}>
          <div className="media">
            {" "}
            <a href="#"></a>
            <div className="media-body">
              <div className="reviews-members-header">
                {" "}
                <span className="star-rating float-right">
                  {" "}
                  <a href="#">
                    <i className="icofont-ui-rating active"></i>
                  </a>{" "}
                  <a href="#">
                    <i className="icofont-ui-rating active"></i>
                  </a>{" "}
                  <a href="#">
                    <i className="icofont-ui-rating active"></i>
                  </a>{" "}
                  <a href="#">
                    <i className="icofont-ui-rating active"></i>
                  </a>{" "}
                  <a href="#">
                    <i className="icofont-ui-rating"></i>
                  </a>{" "}
                </span>
                <h6 className="mb-1">
                  <a className="text-black" href="#">
                    {review.name}
                  </a>
                </h6>
                <p className="text-gray">Tue, 20 Mar 2020</p>
              </div>
              <div className="reviews-members-body">
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.reviews) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="bg-white rounded shadow-sm p-5 mb-5  restaurant-detailed-ratings-and-reviews ">
          <h5 className="mb-1">All Ratings and Reviews</h5>

          <div> {this.renderReview()} </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { reviews: state.product.reviews };
};
export default connect(
  mapStateToProps,
  { fetchReview }
)(ShowReview);
