import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import RegularGameMechanism from "../Components/RegularGame/RegularGameMechanism";
import ScoreBoard from "../Components/RegularGame/ScoreBoard";

const RegularGame = () => {
  return (
    <div className="bg-gradient-to-br from-bG1 to-bG2 font-barlow h-screen">
      <ScoreBoard />
      <RegularGameMechanism />
      <button className="text-white text-xl fixed left-14 top-1.5 md:top-24 md:left-4 lg:left-5 lg:top-16">
        <FontAwesomeIcon icon={faVolumeHigh} />
      </button>
      <Link to="/">
        <button className="text-white text-xl fixed left-4 top-1 md:top-10 lg:left-5 lg:top-5">
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </Link>
    </div>
  );
};

export default RegularGame;
