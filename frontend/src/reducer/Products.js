const INITIAL_STATE = {
  productData: null,
  reviews: null,
  currentBooking: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return { ...state, productData: action.payload };
    case "FETCH_REVIEW":
      return { ...state, reviews: action.payload };
    case "GET_BOOKING":
      return {
        ...state,
        currentBooking: action.payload
      };
    default:
      return state;
  }
};
