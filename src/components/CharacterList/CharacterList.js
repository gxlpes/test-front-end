import Character from "../Character/Character";
import { CharactersListContainer } from "./CharacterListStyles";

const CharacterList = ({ characters }) => {
  return (
    <CharactersListContainer>
      {characters.length > 0 ? (
        characters.map((character) => {
          return <Character key={character.id} image={character.image} name={character.name} />;
        })
      ) : (
        <p>No character found!</p>
      )}
    </CharactersListContainer>
  );
};

export default CharacterList;
