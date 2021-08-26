const todoReducer = (state = [], action) => {
    if (action.type === "ADD_TODO") {
      return [...state, action.payload];
    } else if (action.type === "REMOVE_TODO") {
      return state.filter((_item, index) => index !== action.payload);
    } else if (action.type === "UPDATE_TODO") {
      state = state.map((el, index) =>
        action.payload.id === index ? { ...el, title: action.payload.title } : el
      );
      return state;
    } else if (action.type === "EDIT_TODO") {
      state = state.map((el, index) =>
        action.payload.id === index
          ? { ...el, isEdit: action.payload.isEdit }
          : el
      );
      return state;
    }
    return state;
  };
  
  export default todoReducer;