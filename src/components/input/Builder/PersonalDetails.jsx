import InputField from "../Form/InputField";

function PersonalDetails({ handleChange }) {
  return (
    <div className="personalDetails">
      <InputField
        name="firstName"
        label="First Name"
        handleChange={handleChange}
      />
      <InputField
        name="lastName"
        label="Last Name"
        handleChange={handleChange}
      />
      <InputField
        name="emailAddress"
        label="Email Address"
        handleChange={handleChange}
      />
      <InputField name="address" label="Address" handleChange={handleChange} />
      <InputField
        name="phone"
        label="Phone Number"
        handleChange={handleChange}
      />
    </div>
  );
}

export default PersonalDetails;
