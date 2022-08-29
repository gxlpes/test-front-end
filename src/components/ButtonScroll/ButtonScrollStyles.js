import styled from "styled-components";

export const ButtonScrl = styled.div`
  position: fixed;
  bottom: 100px;
  height: 5rem;
  left: 3rem;
  width: 10rem;
  animation: opacity 0.5s ease-in-out;

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  svg {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    width: 3rem;
    margin: 0;
    cursor: pointer;
  }
`;
