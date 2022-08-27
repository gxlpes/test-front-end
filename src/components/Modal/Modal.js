import { ModalContainer } from "./ModalStyles";

const Modal = ({ setClicked, character, details }) => {
  console.log(details);

  const modalHandler = () => {
    setClicked(false);
  };

  return (
    <ModalContainer>
      <div>{details.name}</div>
      <div>{details.species}</div>
      <div>{details.status}</div>
      <button onClick={modalHandler}>Ok</button>
    </ModalContainer>
  );
};

export default Modal;
