import React from "react";
import PropTypes from "prop-types";
const Checkbox = ({ field: { name, value, onChange, onBlur }, id }) => {
  return (
    <input
      name={name}
      id={id}
      type="checkbox"
      value={value}
      checked={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

Checkbox.propTypes = {
  field: PropTypes.object.isRequired,
  id: PropTypes.any.isRequired
};
export { Checkbox };
