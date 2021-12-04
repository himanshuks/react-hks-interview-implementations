export function addProductToBasket(product) {
  console.log("add ACTION called...data received ---> ", product);
  return {
    payload: product,
    type: "ADD_PRODUCT_TO_BASKET",
  };
}
