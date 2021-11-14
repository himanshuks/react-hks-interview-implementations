import { useState } from "react";
import { v4 as uid } from "uuid";

export const Stocks = () => {
  const [buyOrder, setBuyOrder] = useState([]);
  const [sellOrder, setSellOrder] = useState([]);

  const priceOrg = 37000 + Math.random() * 20000;

  const stock = {
    id: uid(),
    size: Math.round(Math.random() * 10000) / 10000,
    price: Math.round(priceOrg * 100) / 100,
  };

  return (
    <div>
      <h2>Welcome to Stocks</h2>
      <div>
        <button
          style={{
            backgroundColor: "#26a52d",
            width: "10%",
            fontWeight: "bold",
            color: "white",
            border: "none",
          }}
        >
          Buy
        </button>
        <button
          style={{
            backgroundColor: "#f85c27",
            width: "10%",
            fontWeight: "bold",
            color: "white",
            border: "none",
          }}
        >
          Sell
        </button>
      </div>
    </div>
  );
};
