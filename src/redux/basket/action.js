export function addProductToBasket(product) {
  console.log("add ACTION called...data received ---> ", product);
  return {
    payload: product,
    type: "ADD_PRODUCT_TO_BASKET",
  };
}

export function removeProductFromBasket(productId) {
  console.log("remove ACTION called...data received ---> ", productId);
  return {
    payload: productId,
    type: "REMOVE_PRODUCT_FROM_BASKET",
  };
}
