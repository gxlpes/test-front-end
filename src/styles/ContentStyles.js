import styled from "styled-components";
import Image from "../assets/background.png";

export const Content = styled.div`
  max-width: 75rem;
  margin-inline: auto;
  flex: 1 0 auto;

  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

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
