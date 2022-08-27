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

  const loadedDataStorage = localStorage.getItem("charactersData");
  useEffect(() => {
    if (loadedDataStorage) {
      setCharacters(JSON.parse(loadedDataStorage));
      console.log("pegou localStorage");
    } else {
      console.log("sem localstorage");
      fetchCharacters();
    }
  }, []);

  ///////////////////// sort handler and localStorage sort
  const sortHandler = (e) => {
    if (e.target.innerText === "Default") {
      if (loadedDataStorage) {
        characters.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
        window.localStorage.setItem("charactersData", JSON.stringify(characters)); // setting flatten data to the localStorage
      }
    } else {
      if (loadedDataStorage) {
        characters.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        window.localStorage.setItem("charactersData", JSON.stringify(characters)); // setting flatten data to the localStorage
      }
    }
  };

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
            <button onClick={sortHandler}>Default</button>
            <button onClick={sortHandler}>Name</button>
            <CharacterList
              filteredCharacters={filteredCharacters}
              setDetail={setDetail}
              setClicked={setClicked}
              setSort={sortHandler}
            />
            <Footer />
          </Content>
        </>
      )}
    </>
  );
}

export default App;
