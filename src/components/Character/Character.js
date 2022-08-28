import { ReactComponent as DotSVG } from "../../assets/dot.svg";
import { CharacterCard, CharacterContent } from "./CharacterStyles";

const Character = ({ episode, name, image, species, status, setClickedState, setDetailState, character }) => {
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
        <p className="sub">
          {species} | {status} {status === "Alive" ? <DotSVG fill="#1CB65D" /> : <DotSVG fill="#BA372A" />}
        </p>
      </CharacterContent>
    </CharacterCard>
  );
};

export default Character;
