import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBuildings } from "../../api/buildingsApi";
import BuildingsList from "./BuildingsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faBuilding } from "@fortawesome/free-solid-svg-icons";

const BuildingsPage = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getBuildings().then((buildings) => setBuildings(buildings));
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center p-1">
        <FontAwesomeIcon icon={faBuilding} className="mr-2" />
        <Link
          className="btn btn-primary p-1 d-flex align-items-center"
          to="/building"
        >
          <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
          Add Address
        </Link>
      </div>
      <BuildingsList buildings={buildings} />
    </div>
  );
};

export default BuildingsPage;
