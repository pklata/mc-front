import { useEffect, useState } from "react";
import { getBuildingById } from "../../api/buildingsApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faSearch,
  faServer,
  faPlug,
  faBolt,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

const BuildingOptions = () => {
  let { id } = useParams();
  const [building, setBuilding] = useState([]);

  useEffect(() => {
    if (id) {
      getBuildingById(id).then((building) => {
        setBuilding(building);
      });
    }
  }, [id]);

  return (
    <>
      <div className="d-flex align-items-center p-1">
        <Link className="btn btn-primary mr-2" to={`/buildings`}>
          <FontAwesomeIcon icon={faBackward} />
        </Link>
        <h4>
          {building.city}, {building.address}
        </h4>
      </div>
      <div>
        <Link
          className="btn btn-primary m-1 w-100"
          to={`/building/${building.id}/locals`}
        >
          <FontAwesomeIcon icon={faSearch} /> Local inspection
        </Link>
      </div>

      <div>
        <Link
          className="btn btn-primary m-1 w-100"
          to={`/building/${building.id}/common-area`}
        >
          <FontAwesomeIcon icon={faPeopleArrows} /> Common Area
        </Link>
      </div>
      <div>
        <Link
          className="btn btn-primary m-1 w-100"
          to={`/building/${building.id}/switchboard`}
        >
          <FontAwesomeIcon icon={faServer} /> Switchboard
        </Link>
      </div>
      <div>
        <Link
          className="btn btn-primary m-1 w-100"
          to={`/building/${building.id}/main-switch`}
        >
          <FontAwesomeIcon icon={faPlug} /> Main Switch
        </Link>
      </div>
      <div>
        <Link
          className="btn btn-primary m-1 w-100"
          to={`/building/${building.id}/lightning-protection`}
        >
          <FontAwesomeIcon icon={faBolt} /> Lightning Protection
        </Link>
      </div>
    </>
  );
};

export default BuildingOptions;
