import styled from "styled-components";

export const Content = styled.div`
  .modal {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 10;
    overflow: hidden;
    background-color: white;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background: rgba(0, 0, 0, 0.75);
  }
`;
