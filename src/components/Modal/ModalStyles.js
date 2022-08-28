import styled from "styled-components";

export const ModalContainer = styled.div`
  right: 0;
  left: 0;
  top: 150px;
  margin-right: auto;
  margin-left: auto;
  max-width: 30rem;
  width: 70%;
  position: fixed;
  z-index: 10;
  overflow: hidden;
  background-color: white;
  border-radius: 4px;
  padding: 1.25rem;
  filter: drop-shadow(0px 4px 4px black);
  transition: all 0.3s ease-in-out;
  animation: appear 0.2s ease-in-out;

  @keyframes appear {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    .dots {
      display: flex;
      gap: 0.8rem;

      .green {
        width: 0.8rem;
        fill: #8ac645;
      }

      .blue {
        width: 0.8rem;
        fill: #00afc7;
      }
    }
  }

  .container-character,
  .container-appear {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #f6f7f9;
    padding: 1rem;
    border-radius: 5px;
    color: #3f3f3f;
    outline: 2px solid #8ac645;

    p {
      margin-inline: 0;
      margin-block: 0.2rem;
    }

    h2 {
      margin: 0;
    }

    h3 {
      margin-inline: 0;
      margin-block: 0rem 0.5rem;
    }
  }

  .container-appear {
    margin-bottom: 1rem;
  }

  .name {
    font-weight: bold;
    margin: 0;
    color: #3f3f3f;
  }

  button {
    background-color: rgb(0, 175, 199);
    width: 100%;
    height: 2rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;
