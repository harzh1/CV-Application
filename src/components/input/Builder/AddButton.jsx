function AddButton({ label, handleClick }) {
  return (
    <button className="add-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default AddButton;
