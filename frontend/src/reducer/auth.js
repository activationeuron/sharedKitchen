const INITIAL_STATE = {
  userData: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, userData: action.payload || false };

    default:
      return state;
  }
};
