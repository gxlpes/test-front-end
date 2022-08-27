import Character from "../Character/Character";
import { CharactersListContainer } from "./CharacterListStyles";

const CharacterList = ({ filteredCharacters, setClicked, setDetail }) => {
  return (
    <CharactersListContainer>
      {filteredCharacters.length > 0 ? (
        filteredCharacters.map((character) => {
          return (
            <>
              <Character
                key={character.id}
                image={character.image}
                name={character.name}
                setClickedState={setClicked}
                setDetailState={setDetail}
                character={character}
              />
            </>
          );
        })
      ) : (
        <p>No character found!</p>
      )}
    </CharactersListContainer>
  );
};

export default CharacterList;
