import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ id, label, error, register, value }) => {
  let wrapperClass = "form-group";
  if (error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div>
        <input id={id} {...register(id)} defaultValue={value} />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
