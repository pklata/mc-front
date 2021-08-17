import React from "react";

const BuildingsList = ({ buildings }) => (
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
);

export default BuildingsList;
