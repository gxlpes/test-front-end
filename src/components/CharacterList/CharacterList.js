import { useState } from "react";
import Character from "../Character/Character";
import { CharactersListContainer } from "./CharacterListStyles";

const CharacterList = ({ filteredCharacters, setClicked, setDetail }) => {
  const [currentPage, setCurrentPage] = useState(20);
  let items = filteredCharacters.slice(0, currentPage);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 1) {
      console.log(items);
      setCurrentPage(currentPage + 3);
    }
  });

  return (
    <CharactersListContainer>
      {items.length > 0 ? (
        items.map((character) => {
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
