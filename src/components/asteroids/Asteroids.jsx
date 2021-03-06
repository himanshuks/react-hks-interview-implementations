// Below program hits API of NASA and provides Asteroids data
// API key - mandatory and placed in ENV file
// Click Button - displays asteroids data in tabular format

import axios from "axios";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_NASA_API;

export const Asteroids = () => {
  const [asteroidsList, setAsteroids] = useState([]);

  const getAsteroids = () => {
    axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse", {
        params: { api_key: API_KEY },
      })
      .then((res) => {
        console.log(`res`, res.data.near_earth_objects);
        setAsteroids(res.data.near_earth_objects);
      });
  };

  return (
    <div>
      <h2>Asteroid Page</h2>
      <button onClick={getAsteroids}>Click Me</button>
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
