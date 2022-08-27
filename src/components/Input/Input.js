import React from "react";

const Input = ({ onInputData }) => {
  const getInputHandler = (e) => onInputData(e.target.value);

  return <input type="text" placeholder="Type what you want" onChange={getInputHandler} />;
};

export default Input;
