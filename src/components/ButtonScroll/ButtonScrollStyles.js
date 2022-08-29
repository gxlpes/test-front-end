import styled from "styled-components";

export const ButtonScrl = styled.div`
  position: fixed;
  bottom: 35px;
  left: 50%;
  margin-left: -24px; //item has 48px width
  animation: opacity 0.5s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:active {
    transform: translateY(20px);
  }

  &:hover {
    filter: drop-shadow(0px 0px 5px #8ac645);
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  svg {
    background-color: white;
    border-radius: 5px;
    width: 3rem;
    margin: 0;
    cursor: pointer;
  }
`;
