import styled from "styled-components";

export const CharacterCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: #3f3f3f;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  filter: drop-shadow(0px 5px 5px black);
  width: 20rem;

  &:hover {
    transform: scale(1.01);
    outline: 3px solid #00b0c7;
    filter: drop-shadow(0px 5px 5px #8ac645);
  }
`;

export const CharacterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .name {
    font-weight: bold;
    margin: 0;
    margin-bottom: -0.5rem;
    text-align: center;
    margin-inline: 1rem;
  }

  img {
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }

  p {
    display: flex;
    gap: 0.2rem;
    margin-block: 0;
    margin-inline: 1.25rem;
    text-align: center;
    font-weight: 400;
  }

  .sub {
    margin-bottom: 1.25rem;
  }

  svg {
    width: 0.5rem;
    margin-left: 0.2rem;
  }
`;
