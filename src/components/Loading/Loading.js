import { LoadingContainer } from "./LoadingStyles";
import { ReactComponent as RickMortySVG } from "../../assets/rickandmorty.svg";

const Loading = () => {
  return (
    <LoadingContainer>
      <RickMortySVG />
      <p>
        To live is to risk it all otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the
        universe blows you…
      </p>
    </LoadingContainer>
  );
};

export default Loading;
