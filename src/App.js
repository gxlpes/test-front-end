import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

function App() {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character?page=2");
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        const arrayCharacters = data.results;
        console.log(arrayCharacters);
        setCharacterData(arrayCharacters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
