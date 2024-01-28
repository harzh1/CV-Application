import { PlaceholderValues } from "../Form/PlaceholderValues";

function Link({ handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor={"link"}>Link</label>
      <input
        type="url"
        className="form-control"
        id="link"
        name="link"
        placeholder={PlaceholderValues["link"]}
        onChange={handleChange}
      />
    </div>
  );
}

export default Link;
