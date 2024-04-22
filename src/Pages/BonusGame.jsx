import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faVolumeHigh,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import BonusGameMechanism from "../Components/BonusGame/BonusGameMechanism";
import ScoreBoard from "../Components/BonusGame/ScoreBoard";
import { useState, useEffect } from "react";

const BonusGame = () => {
  const [bonusScore, setBonusScore] = useState(
    () => Number(localStorage.getItem("bonusScore")) || 0
  );

  useEffect(() => {
    localStorage.setItem("bonusScore", bonusScore);
  }, [bonusScore]);

  return (
    <div className="bg-gradient-to-br from-bG1 to-bG2 font-barlow h-screen">
      <ScoreBoard bonusScore={bonusScore} />
      <BonusGameMechanism
        bonusScore={bonusScore}
        setBonusScore={setBonusScore}
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

export default BonusGame;
