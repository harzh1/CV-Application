import { PlaceholderValues } from "../Form/PlaceholderValues";

function Link({ name, label, handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label ? label : "Github"}</label>
      <input
        type="url"
        className="form-control"
        id={name}
        name={name}
        placeholder={PlaceholderValues["link"]}
        onChange={handleChange}
      />
    </div>
  );
}

export default Link;
