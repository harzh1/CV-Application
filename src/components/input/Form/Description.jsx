import React from "react";
import { PlaceholderValues } from "../Form/PlaceholderValues";

function Description({ handleChange }) {
  return (
    <div className="input-field description">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        type="text"
        onChange={handleChange}
        placeholder={PlaceholderValues.description}
        required
      />
    </div>
  );
}

export default Description;
