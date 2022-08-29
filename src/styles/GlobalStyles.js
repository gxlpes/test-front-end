import { createGlobalStyle } from "styled-components";
import Image from "../assets/background.png";

export default createGlobalStyle`

* {
   scroll-behavior: smooth;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   :focus {
    outline: none;
}

}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    margin-inline: auto;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
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
