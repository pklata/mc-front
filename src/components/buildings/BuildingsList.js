import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTasks } from "@fortawesome/free-solid-svg-icons";

const BuildingsList = ({ buildings }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Street</th>
        <th>City</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {buildings.map((building) => {
        return (
          <tr key={building.id}>
            <td>{building.address}</td>
            <td>{building.city}</td>
            <td>
              <Link
                className="btn btn-primary py-1 px-1"
                to={`/building/${building.id}`}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <Link
                className="btn btn-danger py-1 px-1"
                to={`/building/${building.id}/delete`}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Link>
              <Link
                className="btn btn-info py-1 px-1"
                to={`/building/${building.id}/options`}
              >
                <FontAwesomeIcon icon={faTasks} />
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default BuildingsList;
