// import { kitchenAPI } from "../api/kitchenApi";
import axios from "axios";

export const fetchUsers = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: "FETCH_USER", payload: res.data });
};

export const getProfile = () => async dispatch => {
  const res = await axios.get("/api/profile");
};

export const fetchKitchens = id => async dispatch => {
  const response = await axios.get(`/p/product/${id}`);
  dispatch({ type: "FETCH_PRODUCT", payload: response.data[0] });
};
// final

export const postReview = reviewData => async dispatch => {
  const kitchenId = parseInt(reviewData.KitchenId);

  const response = await axios.post(`/p/review/${kitchenId}`, {
    userId: reviewData.userId,
    kitchenId,
    review: reviewData.reviews,
    stars: reviewData.stars
  });

  dispatch({ type: "POST_REVIEW", payload: response.data });
  return;
};

export const fetchReview = id => async dispatch => {
  console.log("fire");
  const response = await axios.get(`/p/review/${id}`);
  console.log(response, "response fetch kitchens");
  dispatch({ type: "FETCH_REVIEW", payload: response.data });
};

export const BookKitchen = (bookingInfo, id, userId) => async dispatch => {
  console.log(bookingInfo);
  console.log(id);
  console.log(userId);
  const response = await axios.post(`/p/bookkitchens/${id}`, {
    ...bookingInfo,
    kitchenId: id,
    userId: userId
  });
  dispatch({ type: "BOOK_KITCHEN", payload: response.data });
};

export const fetchBookingInfo = id => async dispatch => {
  console.log(id);
  const response = await axios.get(`/p/bookkitchens/${id}`);
  if (!response.data.result) {
    dispatch({ type: "GET_BOOKING", payload: null });
    return;
  }
  const result = response.data.result.map(ele => {
    return {
      start: ele.booked_from.split("T")[0],
      end: ele.booked_until.split("T")[0]
    };
  });
  console.log(result, "Reault of booking data");
  dispatch({ type: "GET_BOOKING", payload: result });
};

export const register=(email,password,name)=>async dispatch=>{
const response=await axios.post("/signup",{
email:email,password:password,name:name
})
dispatch({ type: "REGISTER", payload: response.data });
}

export const login=(email,password)=>async dispatch=>{
  const response=await axios.post("/login",{
    email:email,password:password
  })
  dispatch({type:"LOGIN",payload:response.data})
}