import { useState } from "react";

export const Asteroids = () => {
  const [asteroidsList, setAsteroids] = useState([]);

  return (
    <div>
      <h2>Asteroid Page</h2>
      <button>Click Me</button>
    </div>
  );
};
