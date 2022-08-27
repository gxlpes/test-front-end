import { CharacterCard } from "./CharacterStyles";

const Character = ({ id, name, image, setClickedState, setDetailState, character }) => {
  // setting the modal open, setting the state content of the modal
  const modalHandler = () => {
    setClickedState(true);
    setDetailState(character);
    console.log(character);
  };

  return (
    <CharacterCard onClick={modalHandler}>
      <img src={image} alt="character" />
      <p>{id}</p>
      <p>{name}</p>
    </CharacterCard>
  );
};

export default Character;
