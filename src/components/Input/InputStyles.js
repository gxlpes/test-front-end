import styled from "styled-components";

export const InputCharacter = styled.input`
  width: 45%;
  max-width: 12rem;
  height: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  text-align: center;
  border-radius: 3px;
  filter: drop-shadow(0px 5px 5px black);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    border: none;
  }
`;
