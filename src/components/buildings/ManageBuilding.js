import BuildingForm from "./BuildingForm";
import { useEffect, useState } from "react";
import { getBuildingById } from "../../api/buildingsApi";
import { useParams } from "react-router-dom";

const ManageBuilding = () => {
  let { id } = useParams();
  const [building, setBuilding] = useState([]);

  useEffect(() => {
    if (id) {
      getBuildingById(id).then((building) => {
        setBuilding(building);
      });
    }
  }, [id]);

  const saveBuilding = (data) => {
    console.log(data);
  };

  return (
    <>
      <h4 className="col">
        {id ? `Edit: ${building.city}, ${building.address}` : "New Address:"}
      </h4>
      <BuildingForm building={building} onSubmit={saveBuilding} />
    </>
  );
};

export default ManageBuilding;
