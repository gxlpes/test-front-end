import { useEffect, useState } from "react";
import { ReactComponent as UpSVG } from "../../assets/up.svg";
import { ButtonScrl } from "./ButtonScrollStyles";

const ButtonScroll = () => {
  const [backToTop, setBackToTop] = useState(false); // display or not the button

  // run just once after the 1000 pixels is reached
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  // function to return to top
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <ButtonScrl onClick={scrollUp}>
          <UpSVG />
        </ButtonScrl>
      )}
    </>
  );
};

export default ButtonScroll;
