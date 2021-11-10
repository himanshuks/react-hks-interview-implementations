export const Stocks = () => {
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
