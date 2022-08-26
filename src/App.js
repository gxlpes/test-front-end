import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterList from "./components/CharacterList/CharacterList";
import Footer from "./components/Footer/Footer";

function App() {
  const [fetchMore, setFetchMore] = useState(1);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${fetchMore}`); //getting the first page
        if (!res.ok) {
          // if res is not ok
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        const arrayCharacters = data.results;
        console.log(arrayCharacters);
        localStorage.setItem("1", JSON.stringify(arrayCharacters)); // storing in localstorage
        setCharacters(arrayCharacters);
      } catch (error) {
        // if error
        console.log(error);
      }
    };

    fetchCharacters();
  }, [fetchMore]);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 2) {
      setFetchMore((prevFetch) => prevFetch + 1);
    }
  });

  return (
    <>
      <Navbar />
      <HeroSection />
      {characters && <CharacterList characters={characters} />}
      <Footer />
    </>
  );
}

export default App;
