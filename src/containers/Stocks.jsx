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

  const handleBuy = () => {
    console.log("buy clicked");
    setBuyOrder([...buyOrder, stock]);
  };

  const handleSell = () => {
    console.log("sell clicked");
    setSellOrder([...sellOrder, stock]);
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
          onClick={handleSell}
        >
          Sell
        </button>
      </div>
      <h3>Table of Order Placed</h3>
      <div>
        <table>
          {sellOrder.map((x) => (
            <tr key={x.id}>
              <td>{x.size}</td>
              <td style={{ color: "red" }}>{x.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
