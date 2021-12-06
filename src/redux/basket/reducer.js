const initialState = {
  products: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    default:
      console.log("default REDUCER called");
      return state;
  }
}
