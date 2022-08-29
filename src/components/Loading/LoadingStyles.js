import styled from "styled-components";

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3f3f3f;
  max-width: 50%;
  margin-inline: auto;
  margin-block: auto;

  p {
    text-align: center;
    font-weight: bold;
    font-size: clamp(0.8vw + 0.8rem, 1vw + 1rem, 1.1vw + 1.1rem);
    z-index: 1;
    position: fixed;
    top: 45%;
    width: 50%;
    margin: 0;
  }

  svg {
    position: relative;
    max-width: 30rem;
    fill: black;
    z-index: -1;
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
