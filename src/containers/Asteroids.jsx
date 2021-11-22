import { useState } from "react";

export const Asteroids = () => {
  const [asteroidsList, setAsteroids] = useState([]);

  return (
    <div>
      <h2>Asteroid Page</h2>
      <button>Click Me</button>
      <div>
        <h3>List of Asteroids Moving</h3>
        <table>
          <tbody>
            <tr>
              <th>REF ID</th>
              <th>NAME</th>
              <th>MAGNITUDE</th>
              <th>JPL URL</th>
            </tr>
            {asteroidsList.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.neo_reference_id}</td>
                <td>{obj.name}</td>
                <td>{obj.absolute_magnitude_h}</td>
                <td>{obj.nasa_jpl_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
