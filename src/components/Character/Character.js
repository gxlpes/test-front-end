import { CharacterCard } from "./CharacterStyles";
const Character = ({ id, name, image }) => {
  return (
    <CharacterCard>
      <img src={image} alt="character" />
      <p>{id}</p>
      <p>{name}</p>
    </CharacterCard>
  );
};

export default Character;
