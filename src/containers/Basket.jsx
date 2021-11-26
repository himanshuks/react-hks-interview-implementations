import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Basket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const storeData = useSelector((x) => x.products);
  const dispatch = useDispatch();

  function getSampleProduct() {
    console.log("product created");
    return {
      id: Math.floor(Math.random() * 10000000),
      name: `Product Name ${Math.floor(Math.random() * 100000)}`,
      quantity: Math.floor(Math.random() * 20 + 1),
      price: Math.floor(Math.random() * 100 + 1),
    };
  }

  return (
    <div>
      <h2>Basket Component</h2>
    </div>
  );
};
