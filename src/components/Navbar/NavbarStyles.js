import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    color: white;
    filter: drop-shadow(2px 0px 2px rgba(0, 0, 0, 0.5));
  }

  a {
    text-decoration: none;
  }

  svg {
    fill: #00b0c8;
    width: 1.5rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.2;
    }
  }
`;
