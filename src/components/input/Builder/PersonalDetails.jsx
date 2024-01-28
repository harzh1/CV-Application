import InputField from "../Form/InputField";

function PersonalDetails({ handleChange }) {
  // function handlePersonalDetailsChange(event) {
  //   if (event.target.name == "firstName") {
  //     handleChange("firstName", event.target.value);
  //   }
  //   if (event.target.name == "lastName") {
  //     handleChange("lastName", event.target.value);
  //   }
  //   if (event.target.name == "emailAddress") {
  //     handleChange("emailAddress", event.target.value);
  //   }
  //   if (event.target.name == "address") {
  //     handleChange("address", event.target.value);
  //   }
  //   if (event.target.name == "phone") {
  //     handleChange("phone", event.target.value);
  //   }
  // }

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
