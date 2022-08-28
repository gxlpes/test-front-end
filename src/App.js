import { useEffect, useState } from "react";
import { Content } from "./styles/ContentStyles";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  ///////////////////////  states management
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false); // lifting modal state up (CharacterList > Character)
  const [detail, setDetail] = useState(" ");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  ////////////////////////// check if data is already loaded
  const loadedDataStorage = localStorage.getItem("charactersData");
  useEffect(() => {
    if (loadedDataStorage) {
      const formattedData = JSON.parse(loadedDataStorage);
      setCharacters(formattedData);
      if (formattedData[0].id === 1) {
        setSort(false);
      } else {
        setSort(true);
      }
    } else {
      fetchCharacters();
    }
  }, []);

  /////////////////////// fetch function
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
      console.log(error);
    }
    setLoading(false);
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
        <Loading />
      ) : (
        <>
          <Content>
            <Navbar />
            {clicked && (
              <>
                <div className="backdrop" onClick={modalHandler} />
                <Modal setClicked={setClicked} details={detail} />
              </>
            )}
            <HeroSection onInputData={searchHandler} onSort={setSort} sort={sort} />
            <CharacterList
              filteredCharacters={filteredCharacters}
              setDetail={setDetail}
              setClicked={setClicked}
              sort={sort}
            />
          </Content>
        </>
      )}
    </>
  );
}

export default App;
