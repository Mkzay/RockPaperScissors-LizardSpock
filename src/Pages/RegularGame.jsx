import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRotate } from "@fortawesome/free-solid-svg-icons";
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

  const resetScore = () => {
    setRegularScore(0);
    localStorage.setItem("bonusScore", 0);
  };

  return (
    <div className="bg-gradient-to-br from-bG1 to-bG2 font-barlow h-screen">
      <ScoreBoard regularScore={regularScore} />
      <RegularGameMechanism
        regularScore={regularScore}
        setRegularScore={setRegularScore}
      />
      <Link to="/">
        <button className="text-white text-xl fixed left-14 top-1.5 md:top-24 md:left-4 lg:left-5 lg:top-16">
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </Link>
      <button
        onClick={resetScore}
        className="text-white text-xl fixed left-[6.5rem] top-1.5 md:top-40 md:left-4 lg:left-5 lg:top-28"
      >
        <FontAwesomeIcon icon={faRotate} />
      </button>
    </div>
  );
};

export default RegularGame;

/*text-white text-xl fixed left-14 top-1.5 md:top-24 md:left-4 lg:left-5 lg:top-16*/
/*text-white text-xl fixed left-14 top-1.5 md:top-24 md:left-4 lg:left-5 lg:top-16" */
