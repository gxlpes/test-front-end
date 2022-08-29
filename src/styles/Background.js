import Image from "../assets/background.png";
import styled from "styled-components";

const Background = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export default Background;
