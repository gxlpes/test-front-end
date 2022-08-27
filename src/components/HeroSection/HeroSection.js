import { HeroContainer, HeroContent } from "./HeroSectionStyles";
import Input from "../Input/Input";

const HeroSection = ({ onInputData }) => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Rick and Morty</h1>
        <h3>Character Search</h3>
      </HeroContent>
      <Input onInputData={onInputData} />
    </HeroContainer>
  );
};

export default HeroSection;
