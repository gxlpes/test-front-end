import { NavbarContainer } from "./NavbarStyles";
import { ReactComponent as GitHubSVG } from "../../assets/github.svg";

const Navbar = () => {
  return (
    <NavbarContainer target="_blank" href="https://github.com/gxlpes/test-front-end/tree/guilherme_lopes_v2">
      <GitHubSVG />
      <p>Project created by Guilherme Lopes for the React Technical Interview of Docg Tech</p>
    </NavbarContainer>
  );
};

export default Navbar;
