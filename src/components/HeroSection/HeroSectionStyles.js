import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  .buttons {
    color: white;
    font-family: inherit;
    display: flex;
    align-items: center;
    margin-inline: auto;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: transparent;
    height: 2rem;
    width: 5rem;
    max-width: 8rem;
    border-radius: 3px;
    border: white 2px solid;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  img {
    max-width: 90%;
    height: auto;
    margin-top: -1rem;
    width: 40rem;
    filter: drop-shadow(0px 5px 5px black);
  }

  h2 {
    margin-top: -1rem;
    font-size: clamp(1vw + 1rem, 1.25vw + 1rem, 1.5vw + 1rem);
    color: #8ac645;
    font-family: "Roboto", sans-serif;
    filter: drop-shadow(0px 5px 5px black);
  }
`;
