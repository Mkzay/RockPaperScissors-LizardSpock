import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useState, useEffect } from "react";

const Rules = () => {
  const [gameType, setGameType] = useState(null);
  const clickSound = new Audio("/Sounds/click.wav");

  const handleOpenRules = (type) => {
    clickSound.play();
    setGameType(type);
  };

  useEffect(() => {
    clickSound.load();
  });

  return (
    <div className="flex items-center justify-center fixed bottom-5 w-full font-barlow md:bottom-10 lg:w-2/12 lg:right-0">
      <button
        className="border-2 border-white rounded-lg p-2 w-6/12 text-white tracking-wider text-xl font-semibold"
        onClick={() => handleOpenRules("regular")}
      >
        RULES
      </button>
      <div
        className={`${
          gameType ? "block" : "hidden"
        } flex items-center justify-center flex-col gap-24 fixed top-0 w-full h-full bg-white lg:left-0`}
      >
        <div className="flex items-center gap-10 text-lg font-bold text-darkText">
          <button
            className={gameType === "regular" ? "border-b-2 border-darkText" : ""}
            onClick={() => handleOpenRules("regular")}
          >
            REGULAR GAME RULES
          </button>
          <button
            className={gameType === "bonus" ? "border-b-2 border-darkText" : ""}
            onClick={() => handleOpenRules("bonus")}
          >
            BONUS GAME RULES
          </button>
        </div>
        <div>
          {gameType === "regular" && (
            <img src="/Images/image-rules.svg" alt="Regular Game Rules" />
          )}
          {gameType === "bonus" && (
            <img src="/Images/image-rules-bonus.svg" alt="Bonus Game Rules" />
          )}
        </div>
        <div>
          <button className="text-2xl" onClick={() => handleOpenRules(null)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
