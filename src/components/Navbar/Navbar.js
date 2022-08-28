import { NavbarContainer } from "./NavbarStyles";
import { ReactComponent as GitHubSVG } from "../../assets/github.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <a target="_blank" href="https://github.com/gxlpes/test-front-end/tree/guilherme_lopes_v2">
        <GitHubSVG />
      </a>
    </NavbarContainer>
  );
};

export default Navbar;
