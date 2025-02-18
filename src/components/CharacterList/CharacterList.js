import { useEffect, useState } from "react";
import Character from "../Character/Character";
import { CharactersListContainer } from "./CharacterListStyles";

const CharacterList = ({ filteredCharacters, setClickedModal, setDetailCharacter, sort }) => {
  // getting the state from App.js and changing the sort based in the state
  if (sort === false) {
    filteredCharacters.sort((a, b) => {
      // normal sort
      return a.id > b.id ? 1 : -1;
    });
    // checking if the filtered characters array is equal to 826 to set localStorage
    if (filteredCharacters.length >= 826) window.localStorage.setItem("charactersData", JSON.stringify(filteredCharacters)); // setting flatten data to the localStorage
  } else {
    filteredCharacters.sort((a, b) => {
      // name sort
      return a.name > b.name ? 1 : -1;
    });
    // checking if the filtered characters array is equal to 826 to set localStorage
    if (filteredCharacters.length >= 826) window.localStorage.setItem("charactersData", JSON.stringify(filteredCharacters)); // setting flatten data to the localStorage
  }

  // making the infinite scroll work, getting 20 more elements each loop
  const [currentPage, setCurrentPage] = useState(20);
  let items = filteredCharacters.slice(0, currentPage);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 75) {
      setCurrentPage(currentPage + 20);
    }
  });

  return (
    <CharactersListContainer>
      {items.length > 0 ? (
        items.map((character) => {
          return (
            <>
              <Character
                episode={character.episode}
                image={character.image}
                name={character.name}
                species={character.species}
                status={character.status}
                setClickedModalState={setClickedModal}
                setDetailCharacterState={setDetailCharacter}
                character={character}
              />
            </>
          );
        })
      ) : (
        <p>No character found</p>
      )}
    </CharactersListContainer>
  );
};

export default CharacterList;
