// import { kitchenAPI } from "../api/kitchenApi";
import axios from "axios";

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: "FETCH_USER", payload: res.data });
};

export const getProfile = () => async dispatch => {
  const res = await axios.get("/api/profile");
  console.log(res.data);
};

export const fetchKitchens = id => async dispatch => {
  console.log(id);
  const response = await axios.get(`/product/${id}`);
  dispatch({ type: "FETCH_PRODUCT", payload: response.data[0] });
};

export const postReview = (id, review, emailId) => async dispatch => {
  const kitchenId = parseInt(id);
  const response = await axios.post(`/api/p/review/${id}`, {
    ...review,
    kitchenId,
    emailId
  });

  dispatch({ type: "POST_REVIEW", payload: response.data });
};

export const fetchReview = id => async dispatch => {
  const response = await axios.get(`/api/review/${id}`);
  dispatch({ type: "FETCH_REVIEW", payload: response.data });
};

export const BookKitchen = (bookingInfo, id) => async dispatch => {
  const response = await axios.post(`/api/bookkitchens/${id}`, {
    ...bookingInfo,
    id
  });
  console.log(response);
  dispatch({ type: "BOOK_KITCHEN", payload: response.data });
};

export const fetchBookingInfo = id => async dispatch => {
  const response = await axios.get(`/api/bookkitchens/${id}`);
  const result = response.data.result.map(ele => {
    return { start: ele.start_on.split("T")[0], end: ele.end_on.split("T")[0] };
  });
  console.log(result);
  dispatch({ type: "GET_BOOKING", payload: result });
};
