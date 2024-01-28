function Period({ handleChange }) {
  return (
    <div className="input-field period">
      <input
        type="text"
        name="start"
        placeholder="Start"
        onChange={handleChange}
        required
      />
      <label htmlFor="period">-</label>

      <input
        type="text"
        name="end"
        placeholder="End"
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default Period;
