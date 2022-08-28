import { useState, useEffect } from "react";
import { ModalContainer } from "./ModalStyles";
import { ReactComponent as DotSVG } from "../../assets/dot.svg";

const Modal = ({ setClicked, details }) => {
  const [episodes, setEpisodes] = useState(" ");

  // first episode fetch
  useEffect(() => {
    const fetchEp = async () => {
      try {
        let res = await fetch(`${details.episode[0]}`); //getting the first page
        const firstEpisode = await res.json();
        setEpisodes(firstEpisode);
        console.log(firstEpisode);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEp();
  }, []);

  const modalHandler = () => {
    setClicked(false);
  };

  return (
    <ModalContainer>
      <div className="header">
        <h3 className="name">
          {details.name} | ID {details.id}
        </h3>
        <div className="dots">
          <DotSVG className="green" />
          <DotSVG className="blue" />
        </div>
      </div>
      <div className="container-character">
        <h3>Character</h3>
        <p>
          <b>Gender:</b> {details.gender}
        </p>
        <p>
          <b>Origin of the character:</b> {details.origin.name}
        </p>
        <p>
          <b>Last known location: </b>
          {details.location.name}
        </p>
      </div>
      <div className="container-appear">
        <h3>Appearance</h3>
        <p>
          <b>Number of appearances: </b> {details.episode.length ? details.episode.length : "Loading..."} episodes
        </p>
        <p>
          <b>First appearance: </b>
          {episodes.air_date ? episodes.air_date : "Loading..."} [{episodes.episode ? episodes.episode : "Loading..."}]
        </p>
        <p>
          <b>First episode name: </b>
          {episodes.name ? episodes.name : "Loading..."}
        </p>
      </div>
      <button onClick={modalHandler}>Dismiss</button>
    </ModalContainer>
  );
};

export default Modal;
