import React, { useEffect, useState } from "react";
import { getBuildings } from "../api/buildingsApi";

const BuildingsPage = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getBuildings().then((buildings) => setBuildings(buildings));
  }, []);

  return (
    <>
      <h2>Locations</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Street</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map((building) => {
            return (
              <tr key={building.id}>
                <td>{building.address}</td>
                <td>{building.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BuildingsPage;
