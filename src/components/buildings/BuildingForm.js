import React from "react";
import TextInput from "../common/TextInput";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";

const BuildingForm = ({ building, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form>
        <TextInput
          label="Country"
          id="country"
          register={register}
          value={building ? building.country : ""}
        />
        <TextInput
          label="Address"
          id="address"
          register={register}
          value={building ? building.address : ""}
        />
        <TextInput
          label="Zip Code"
          id="zip_code"
          register={register}
          value={building ? building.zip_code : ""}
        />
        <TextInput
          label="City"
          id="city"
          register={register}
          value={building ? building.city : ""}
        />
        <TextInput
          label="County"
          id="county"
          register={register}
          value={building ? building.county : ""}
        />
      </form>
      <div>
        <Link
          className="btn btn-success m-1"
          to="/"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Link>
        <Link className="btn btn-secondary m-1" to="/">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default BuildingForm;
