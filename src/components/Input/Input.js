import { InputCharacter } from "./InputStyles";

const Input = ({ onInputData }) => {
  const getInputHandler = (e) => onInputData(e.target.value);

  return <InputCharacter type="text" placeholder="Name of the character" onChange={getInputHandler} />;
};

export default Input;
