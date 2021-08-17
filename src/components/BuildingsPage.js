import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBuildings } from "../api/buildingsApi";
import BuildingsList from "./BuildingsList";

const BuildingsPage = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getBuildings().then((buildings) => setBuildings(buildings));
  }, []);

  return (
    <>
      <h2>Locations</h2>
      <Link className="btn btn-primary" to="/building">
        Add Course
      </Link>
      <BuildingsList buildings={buildings} />
    </>
  );
};

export default BuildingsPage;
