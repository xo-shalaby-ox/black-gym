import React, { useState } from "react";

export const JoinUs = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    height: "",
  });
  const [toggleState, setToggleState] = useState(0);

  const toggletab = (index) => {
    setToggleState(index);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the input values
    console.log(inputs);
    // Clear the input fields
    setInputs({
      firstName: "",
      lastName: "",
      age: "",
      weight: "",
      height: "",
    });
  };

  return (
    <>
      <button onClick={() => toggletab(1)} className="Joinus__body">
        Join US
      </button>
      <form
        className={
          toggleState === 1 ? "signup__form show__joinus" : "signup__form"
        }
        onSubmit={handleSubmit}
      >
        <div className="fields__form">
          <span onClick={() => toggletab(0)} className="signup__close">
            +
          </span>
          <input
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
            type="text"
            className="field"
            placeholder="First Name ...."
          ></input>
          <input
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
            type="text"
            className="field"
            placeholder="Last Name ...."
          ></input>
          <input
            name="age"
            value={inputs.age}
            onChange={handleChange}
            type="number"
            className="field"
            placeholder="Age ...."
          ></input>
          <input
            name="weight"
            value={inputs.weight}
            onChange={handleChange}
            type="number"
            className="field"
            placeholder="Weigth ...."
          ></input>
          <input
            name="height"
            value={inputs.height}
            onChange={handleChange}
            type="number"
            className="field"
            placeholder="Height ...."
          ></input>
          <select className="gender__form">
            <option className="one">male</option>
            <option className="one">female</option>
          </select>
        </div>
        <button type="submit" className="btn__form">
          Sign UP
        </button>
      </form>
    </>
  );
};
