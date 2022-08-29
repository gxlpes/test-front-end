import styled from "styled-components";

export const Content = styled.div`
  max-width: 75rem;
  margin-inline: auto;
  opacity: 0;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  animation: fadeIn 0.5s 0.5s forwards ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110vh;
    z-index: 9;
    background: rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease-in-out;
    animation: backdropAppear 0.3s ease-in-out;

    @keyframes backdropAppear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
