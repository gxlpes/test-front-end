import styled from "styled-components";

export const InputCharacter = styled.input`
  width: 45%;
  max-width: 12rem;
  height: 3rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 3px;
  filter: drop-shadow(0px 5px 5px black);
  width: 260px;
  border: 1px solid #555;
  display: block;
  padding: 9px 4px 9px 40px;
  background: white
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    border: none;
  }
`;
