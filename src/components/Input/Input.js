import { InputCharacter } from "./InputStyles";

const Input = ({ onInputData }) => {
  const getInputHandler = (e) => onInputData(e.target.value);

  return <InputCharacter type="text" placeholder="Type what you want" onChange={getInputHandler} />;
};

export default Input;
