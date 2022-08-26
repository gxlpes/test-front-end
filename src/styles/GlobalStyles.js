import { createGlobalStyle } from "styled-components";
import Image from "../images/background.png";

export default createGlobalStyle`
nav {
margin-inline: auto;
}

body {
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    margin-inline: auto;
    max-width: 75rem;
}


`;
