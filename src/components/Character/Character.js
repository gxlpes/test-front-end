import { CharacterCard, CharacterContent } from "./CharacterStyles";

const Character = ({ name, image, species, status, setClickedState, setDetailState, character }) => {
  // setting the modal open, setting the state content of the modal
  const modalHandler = () => {
    setClickedState(true);
    setDetailState(character);
    console.log(character);
  };

  return (
    <CharacterCard onClick={modalHandler}>
      <CharacterContent>
        <img src={image} alt="character" />
        <p className="name">
          <b>{name}</b>
        </p>
        <p className="space">
          {species} | {status}
        </p>
      </CharacterContent>
    </CharacterCard>
  );
};

export default Character;
