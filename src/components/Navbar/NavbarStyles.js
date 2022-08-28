import styled from "styled-components";

export const NavbarContainer = styled.a`
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(5px);

  height: 4rem;
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  color: #3f3f3f;
  font-weight: bold;
  gap: 1rem;

  svg {
    fill: #3f3f3f;
    width: 1.5rem;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
