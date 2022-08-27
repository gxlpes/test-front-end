import { useEffect, useState } from "react";
import { Content } from "./styles/ContentStyles";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterList from "./components/CharacterList/CharacterList";
import Footer from "./components/Footer/Footer";

function App() {
  ///////////////////////  states management
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false); // lifting modal state up (CharacterList > Character)
  const [detail, setDetail] = useState(" ");
  const [search, setSearch] = useState(" ");

  /////////////////////// fetch function

  const fetchCharacters = async () => {
    console.log("rodou fetch");
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
      window.localStorage.setItem("charactersData", JSON.stringify(flatArrayCharacters)); // setting flatten data to the localStorage
    } catch (error) {
      // if error
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadedData = localStorage.getItem("charactersData");
    if (loadedData) {
      setCharacters(JSON.parse(loadedData));
      console.log("pegou localStorage");
    } else {
      console.log("sem localstorage");
      fetchCharacters();
    }
  }, []);

  /////////////////////// modal handler
  const modalHandler = () => {
    setClicked(false);
  };

  /////////////////////// search character input and handler
  const searchHandler = (inputData) => {
    setSearch(inputData);
  };
  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Content>
            {clicked && (
              <>
                <div className="backdrop" onClick={modalHandler} />
                <Modal setClicked={setClicked} details={detail} />
              </>
            )}
            <Navbar />
            <HeroSection onInputData={searchHandler} />
            <CharacterList filteredCharacters={filteredCharacters} setDetail={setDetail} setClicked={setClicked} />
            <Footer />
          </Content>
        </>
      )}
    </>
  );
}

export default App;
