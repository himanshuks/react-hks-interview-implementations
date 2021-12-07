const initialState = {
  products: [],
};

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_BASKET":
      console.log("add REDUCER called...data received ---> ", action.payload);
      return { ...state, products: [...state.products, action.payload] };
    default:
      console.log("default REDUCER called");
      return state;
  }
}
