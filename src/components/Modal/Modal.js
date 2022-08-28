import { ModalContainer } from "./ModalStyles";

const Modal = ({ setClicked, details }) => {
  console.log(details);

  const modalHandler = () => {
    setClicked(false);
  };

  return (
    <ModalContainer>
      <p className="name">{details.name}</p>
      <p>
        <b>Character ID:</b> {details.id}
      </p>
      <p>
        <b>Gender:</b> {details.gender}
      </p>
      <p>
        <b>Origin of the character:</b> {details.origin.name}
      </p>
      <p>
        <b>Last known location of the character: </b>
        {details.location.name}
      </p>
      <p>
        <b>Number of episodes that this character appears:</b> {details.episode.length}
      </p>
      <button onClick={modalHandler}>Ok</button>
    </ModalContainer>
  );
};

export default Modal;
