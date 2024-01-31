import InputField from "../Form/InputField";
import Link from "../Form/Link";

function PersonalDetails({ handleChange }) {
  return (
    <div className="personalDetails form">
      <div className="half-input-div">
        <div className="half-input">
          <InputField
            name="firstName"
            label="First Name"
            handleChange={handleChange}
          />
        </div>
        <div className="half-input">
          <InputField
            name="lastName"
            label="Last Name"
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="half-input-div">
        <div className="half-input">
          <InputField
            name="emailAddress"
            label="Email Address"
            handleChange={handleChange}
          />
        </div>
        <div className="half-input">
          <InputField
            name="phone"
            label="Phone Number"
            handleChange={handleChange}
          />
        </div>
      </div>
      <InputField name="address" label="Address" handleChange={handleChange} />

      <Link name="linkedIn" label="Linkedin" handleChange={handleChange} />
      <Link name="github" label="Github" handleChange={handleChange} />
    </div>
  );
}

export default PersonalDetails;
