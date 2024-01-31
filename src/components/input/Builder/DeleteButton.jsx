function DeleteButton({ label, handleClick }) {
  return (
    <>
      <div className="btn-div">
        <button className="delete-button" onClick={handleClick}>
          {label}
        </button>
      </div>
      <div className="spacer"></div>
    </>
  );
}

export default DeleteButton;
