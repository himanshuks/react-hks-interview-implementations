// Below program adds product into basket to be displayed in table
// Two actions - Add and Remove product
// Add Button - creates a new product and appends in state list
// Remove Action - removes particular product from state list

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProductToBasket,
  removeProductFromBasket,
} from "../../redux/basket/action";

export const Basket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const storeData = useSelector((x) => x.products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect called");
    let tp = 0;
    for (const obj of storeData) {
      tp += obj.quantity * obj.price;
    }
    setTotalPrice(tp);
  }, [storeData]);

  function getSampleProduct() {
    console.log("product created");
    return {
      id: Math.floor(Math.random() * 10000000),
      name: `Product Name ${Math.floor(Math.random() * 100000)}`,
      quantity: Math.floor(Math.random() * 20 + 1),
      price: Math.floor(Math.random() * 100 + 1),
    };
  }

  function AddProductComponent() {
    console.log("add DISPATCH called");
    return (
      <button onClick={() => dispatch(addProductToBasket(getSampleProduct()))}>
        Add product to basket
      </button>
    );
  }

  function onRemove(id) {
    console.log("remove DISPATCH called");
    dispatch(removeProductFromBasket(id));
  }

  return (
    <div>
      <div>
        <h2>Basket Component</h2>
        <AddProductComponent />
      </div>
      <div>
        Total price: <span id="total-price">{totalPrice}</span>
      </div>
      <div>
        <h3>List of Basket Items</h3>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
            {storeData.map((obj) => (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.quantity}</td>
                <td>{obj.price}</td>
                <td>{obj.quantity * obj.price}</td>
                <td>
                  <button
                    // onClick={() => dispatch(removeProductFromBasket(obj.id))}
                    id={`remove-${obj.id}`}
                    onClick={() => onRemove(obj.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
