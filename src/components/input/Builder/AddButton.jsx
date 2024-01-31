function AddButton({ label, handleClick }) {
  return (
    <div className="btn-div">
      <button className="add-button" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
}

export default AddButton;
