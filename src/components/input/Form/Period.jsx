function Period({ handleChange }) {
  return (
    <div className="input-field full">
      <label htmlFor="period">Period</label>
      <div className="input-field-period">
        <div className="period-input">
          <input
            type="text"
            name="start"
            placeholder="Start"
            onChange={handleChange}
            required
          />
        </div>

        <div className="period-input">
          <input
            type="text"
            name="end"
            placeholder="End"
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Period;
