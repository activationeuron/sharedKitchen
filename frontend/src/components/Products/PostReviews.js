import React, { useState } from "react";
import { postReview } from "../../actions/index";
import { connect } from "react-redux";
const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

const PostReview = ({ totalStars, id, userId, postReviewData }) => {
  const [starsSelected, selectStar] = useState(0);
  const [review, setReview] = useState("");

  const handleReviews = event => {
    setReview(event.target.value);
  };

  const PostReviews = event => {
    event.preventDefault();
    if (starsSelected === 0) {
      alert("cannot post Empty Reviews");
      return;
    }
    postReviewData({
      userId: userId[0].id,
      KitchenId: id,
      stars: starsSelected,
      reviews: review
    });
    setReview("");
  };

  if (userId === false) {
    return <div>Login To Post a Review</div>;
  }

  return (
    <div>
      <div class="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
        <h5 class="mb-4">Write A Review</h5>
        <p class="mb-2">Rate the Kitchen</p>
        <div class="mb-4">
          <span>
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div className="star-rating">
                {[...Array(totalStars)].map((n, i) => (
                  <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => selectStar(i + 1)}
                  />
                ))}
              </div>
            </div>
          </span>
        </div>
        <form>
          <div class="form-group">
            <label>Your Review</label>
            <input
              class="form-control"
              value={review}
              onChange={handleReviews}
            />
          </div>
          <div class="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-sm"
              value="Post Review"
              onClick={PostReviews}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const dispatchActionToProps = dispatch => {
  return { postReviewData: e => dispatch(postReview(e)) };
};
export default connect(
  null,
  dispatchActionToProps
)(PostReview);
