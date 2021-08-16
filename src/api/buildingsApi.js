import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/buildings/";

export const getBuildings = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};

export const getBuildingById = (id) => {
  return fetch(baseUrl + id)
    .then(handleResponse)
    .catch(handleError);
};
