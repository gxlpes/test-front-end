import { ReactComponent as DotSVG } from "../../assets/dot.svg";
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
        <p className="name">{name}</p>
        <p className="sub">
          {species} | {status === "unknown" ? "Unknown" : status === "Alive" ? "Alive" : "Dead"}
          {status === "Alive" ? (
            <DotSVG fill="#1CB65D" />
          ) : status === "unknown" ? (
            <DotSVG fill="#F7C702" />
          ) : (
            <DotSVG fill="#BA372A" />
          )}
        </p>
      </CharacterContent>
    </CharacterCard>
  );
};

export default Character;
