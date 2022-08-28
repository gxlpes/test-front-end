import { createGlobalStyle } from "styled-components";
import Image from "../assets/background.png";

export default createGlobalStyle`


body {
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    margin-inline: auto;
    height: 100%;
}

nav {
    max-width: 100vw;
}

*:focus {
    outline: none;
}

`;
