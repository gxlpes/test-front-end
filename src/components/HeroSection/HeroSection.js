import { HeroContainer, HeroContent } from "./HeroSectionStyles";
import Input from "../Input/Input";
import title from "../../assets/title.png";

const HeroSection = ({ onInputData, onSort, sort, filteredCharacters }) => {
  // sort handler and localStorage sort, send data to CharacterList.js via props
  const sortHandler = (e) => {
    if (e.target.innerText === "Default") {
      onSort(false);
    } else {
      onSort(true);
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <img src={title} alt="title" />
        <h2>Character Search</h2>
      </HeroContent>
      <div className="buttons">
        <p>Sort by</p>
        <button onClick={sortHandler} style={{ backgroundColor: sort ? "" : "#8AC645", border: sort ? " " : "none" }}>
          Default
        </button>
        <button onClick={sortHandler} style={{ backgroundColor: sort ? "#8AC645" : " ", border: sort ? "none" : " " }}>
          Name
        </button>
      </div>
      <div className="user-input">
        <Input onInputData={onInputData} />
      </div>
      <div className="info-characters">
        {filteredCharacters.length > 1 ? (
          <p>{filteredCharacters.length} characters found</p>
        ) : filteredCharacters.length == 0 ? (
          " "
        ) : (
          <p>{filteredCharacters.length} character found</p>
        )}
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
