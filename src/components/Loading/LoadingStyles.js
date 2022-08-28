import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  color: #3f3f3f;
  max-width: 70%;
  margin-inline: auto;

  p {
    margin-top: 20rem;
    text-align: center;
    font-weight: bold;
    font-size: clamp(0.8vw + 0.8rem, 1vw + 1rem, 1.1vw + 1.1rem);
  }

  svg {
    width: 40rem;
    fill: black;
    z-index: -1;
    position: absolute;
    top: 5rem;
    animation: animate 1s infinite ease-in-out;

    @keyframes animate {
      0% {
        opacity: 0%;
      }
      50% {
        opacity: 90%;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
