import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 50%;
  z-index: 10;
  overflow: hidden;
  background-color: white;
  border-radius: 4px;
  padding: 1.25rem;
  filter: drop-shadow(0px 4px 4px black);

  .name {
    font-weight: bold;
    font-size: clamp(0.5vw + 0.5rem, 0.8vw + 0.8rem, 1vw + 1rem);
  }

  button {
    background-color: rgb(0, 175, 199);
    width: 3rem;
    height: 2rem;
    padding: 0.2rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;
