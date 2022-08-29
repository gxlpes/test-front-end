import { useEffect, useState } from "react";
import { ReactComponent as UpSVG } from "../../assets/up.svg";
import { ButtonScrl } from "./ButtonScrollStyles";

const ButtonScroll = () => {
  const [backToTop, setBackToTop] = useState(false); // display

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <ButtonScrl style={{ position: "fixed", fontSize: "10rem" }} onClick={scrollUp}>
          <UpSVG />
        </ButtonScrl>
      )}
    </>
  );
};

export default ButtonScroll;
