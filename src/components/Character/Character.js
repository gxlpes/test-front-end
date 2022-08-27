import { CharacterCard } from "./CharacterStyles";

const Character = ({ id, name, image, setClickedState }) => {
  const modalHandler = () => {
    setClickedState(true);
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
