function DeleteButton({ label, handleClick }) {
  return (
    <button className="delete-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default DeleteButton;
