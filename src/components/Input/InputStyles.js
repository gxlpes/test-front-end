import styled from "styled-components";

export const InputCharacter = styled.input`
  width: 10rem;
  margin-inline: auto;
  padding: 1rem 2rem;
  border: none;
  text-align: center;
  border-radius: 3px;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0px 5px 5px black);

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    border: none;
  }
`;
