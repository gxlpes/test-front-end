import { InputCharacter } from "./InputStyles";

const Input = ({ onInputData }) => {
  // set data via handler to App.js search handler
  const getInputHandler = (e) => onInputData(e.target.value);
  return <InputCharacter type="text" placeholder="Search..." onChange={getInputHandler} />;
};

export default Input;
