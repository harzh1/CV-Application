import { PlaceholderValues } from "../Form/PlaceholderValues";

function InputField({ name, label, handleChange }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        onChange={handleChange}
        placeholder={PlaceholderValues[name]}
      />
    </div>
  );
}

export default InputField;
