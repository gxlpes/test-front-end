import { ModalContainer } from "./ModalStyles";

const Modal = ({ setClicked }) => {
  const modalHandler = () => {
    setClicked(false);
  };

  return (
    <ModalContainer>
      <div>Hello!</div>
      <button onClick={modalHandler}>Ok</button>
    </ModalContainer>
  );
};

export default Modal;
