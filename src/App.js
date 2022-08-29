import { useEffect, useState } from "react";
import { Content } from "./styles/ContentStyles";
import Loading from "./components/Loading/Loading";
import Background from "./styles/Background";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CharacterList from "./components/CharacterList/CharacterList";
import ButtonScroll from "./components/ButtonScroll/ButtonScroll";

function App() {
  ///////////////////////  states management
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedModal, setClickedModal] = useState(false); // lifting modal state up (Character > CharacterList > App)
  const [detailCharacter, setDetailCharacter] = useState(" "); // lifting character details for the modal state up (CharacterList > App > Modal)
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false); // lifting sort state up (HeroSection > App > CharacterList)

  ////////////////////////// check if data is already loaded
  const loadedDataStorage = localStorage.getItem("charactersData");
  useEffect(() => {
    //check if there is something in the localStorage
    if (loadedDataStorage) {
      const formattedData = JSON.parse(loadedDataStorage);
      setCharacters(formattedData);
      // check if the data in the localStorage is sort by default
      if (formattedData[0].id === 1) {
        setSort(false);
      } else {
        setSort(true);
      }
    } else {
      setTimeout(() => {
        // wait the page to load and then load more data in the background
        fetchMoreData();
      }, 1000);
      fetchCharacters();
    }
  }, []);

  /////////////////////////// first fetch function
  let responses = []; // all arrays
  const fetchCharacters = async () => {
    setLoading(true);
    try {
      for (let i = 1; i <= 10; i++) {
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

  ////////////////////////// fetching more data after the page loads
  const fetchMoreData = async () => {
    try {
      for (let i = 11; i <= 42; i++) {
        let res = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`); //getting the first page
        const data = await res.json();
        responses.push(data.results);
      }
      const flatArrayCharactersMore = responses.flat(); // flat the arrays of arrays
      setCharacters(flatArrayCharactersMore);
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////// modal handler
  const modalHandler = () => {
    setClickedModal(false);
  };

  /////////////////////// search character input and handler
  const searchHandler = (inputData) => {
    setSearch(inputData);
  };

  // set the data from the characters state, if the user input is blank returns everything
  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Background>
            <Navbar />
            {clickedModal && (
              <>
                <div className="backdrop" onClick={modalHandler} />
                <Modal setClickedModal={setClickedModal} details={detailCharacter} />
              </>
            )}
            <Content>
              <HeroSection
                onInputData={searchHandler}
                onSort={setSort}
                sort={sort}
                filteredCharacters={filteredCharacters}
                characters={characters}
              />
              <CharacterList
                filteredCharacters={filteredCharacters}
                setDetailCharacter={setDetailCharacter}
                setClickedModal={setClickedModal}
                sort={sort}
              />
            </Content>
          </Background>
          <ButtonScroll />
        </>
      )}
    </>
  );
}

export default App;
