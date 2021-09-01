import { useEffect, useState } from "react";
import { getBuildingById } from "../../api/buildingsApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteBuilding = () => {
  let { id } = useParams();
  const [building, setBuilding] = useState([]);

  useEffect(() => {
    getBuildingById(id).then((building) => {
      setBuilding(building);
    });
  }, [id]);

  const deleteBuilding = () => {
    console.log("deleting...");
    console.log(id);
  };

  return (
    <>
      <h4>Delete:</h4>
      <h4>
        {building.city}, {building.address}?
      </h4>
      <Link className="btn btn-danger" to="/" onClick={deleteBuilding}>
        Yes
      </Link>
      <Link className="btn btn-primary" to="/">
        No
      </Link>
    </>
  );
};

export default DeleteBuilding;
