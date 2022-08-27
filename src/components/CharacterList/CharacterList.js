import Character from "../Character/Character";
import Modal from "../Modal/Modal";
import { CharactersListContainer } from "./CharacterListStyles";

const CharacterList = ({ characters, setClicked, setDetail }) => {
  return (
    <CharactersListContainer>
      {characters.length > 0 ? (
        characters.map((character) => {
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
