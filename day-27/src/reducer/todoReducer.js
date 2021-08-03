const todoReducer = (state = null, action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    return state.filter((item, index) => index !== action.payload);
  }
};

export default todoReducer;
