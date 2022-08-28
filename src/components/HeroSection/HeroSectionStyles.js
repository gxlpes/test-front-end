import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 4rem;
  gap: 2rem;

  button {
    background-color: transparent;
    height: 2rem;
    width: 5rem;
    max-width: 8rem;
    border-radius: 3px;
    border: white 2px solid;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 5px 5px black);

    &:active {
      opacity: 1;
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  .buttons {
    color: white;
    font-family: inherit;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-inline: auto;
    gap: 1rem;
  }

  .user-input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg {
      width: 1.5rem;
      fill: white;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 90%;
    height: auto;
    width: 40rem;
    filter: drop-shadow(0px 5px 5px black);
    transition: all 0.2s ease-in-out;
    animation: cycleTitle 4s infinite 0s ease-in-out;

    @keyframes cycleTitle {
      0% {
        filter: drop-shadow(0px 0px 0px #8ac645);
      }
      50% {
        filter: drop-shadow(0px 0px 15px #8ac645);
      }
      100% {
        filter: drop-shadow(0px 0px 0px #8ac645);
      }
    }

    &:hover {
      transform: scale(1.01);
      filter: drop-shadow(0px 5px 5px #8ac645);
    }
  }

  h2 {
    margin-top: -1rem;
    font-size: clamp(0.8vw + 0.8rem, 1vw + 1rem, 1.2vw + 1.2rem);
    color: #8ac645;
    font-family: "Roboto", sans-serif;
    filter: drop-shadow(0px 5px 5px black);
  }
`;
