import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterList from "./components/CharacterList/CharacterList";
import Footer from "./components/Footer/Footer";

function App() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        let responses = [];
        for (let i = 1; i <= 42; i++) {
          let res = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`); //getting the first page
          const data = await res.json();
          responses.push(data.results);
        }
        const flatArrayCharacters = responses.flat(); // flat the arrays of arrays
        setCharacters(flatArrayCharacters);
      } catch (error) {
        // if error
        console.log(error);
      }
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          {characters && <CharacterList characters={characters} />}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
