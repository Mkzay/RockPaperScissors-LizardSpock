import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faVolumeHigh,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import RegularGameMechanism from "../Components/RegularGame/RegularGameMechanism";
import ScoreBoard from "../Components/RegularGame/ScoreBoard";
import { useState, useEffect } from "react";

const RegularGame = () => {
  const [regularScore, setRegularScore] = useState(
    () => Number(localStorage.getItem("regularScore")) || 0
  );

  useEffect(() => {
    localStorage.setItem("regularScore", regularScore);
  }, [regularScore]);

  return (
    <div className="bg-gradient-to-br from-bG1 to-bG2 font-barlow h-screen">
      <ScoreBoard regularScore={regularScore} />
      <RegularGameMechanism
        regularScore={regularScore}
        setRegularScore={setRegularScore}
      />
      <button className="text-white text-xl fixed left-14 top-1.5 md:top-24 md:left-4 lg:left-5 lg:top-16">
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
      <Link to="/">
        <button className="text-white text-xl fixed left-4 top-1 md:top-10 lg:left-5 lg:top-5">
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </Link>
      <button className="text-white text-xl fixed left-[6.5rem] top-1.5 md:top-40 md:left-4 lg:left-5 lg:top-28">
        <FontAwesomeIcon icon={faRotate} />
      </button>
    </div>
  );
};

export default RegularGame;
