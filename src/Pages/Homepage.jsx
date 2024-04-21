import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [bgSound, setBgSound] = useState(null);
  const [muted, setMuted] = useState(false);

  const clickSound = new Audio("/Sounds/click.wav");
  const clickedSound = () => {
    clickSound.play();
  };

  useEffect(() => {
    const audio = new Audio("/Sounds/homepage.wav");
    audio.loop = true;
    audio.play();
    setBgSound(audio);

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const toggleSound = () => {
    if (bgSound) {
      if (bgSound.paused) {
        bgSound.play();
        setMuted(false);
      } else {
        bgSound.pause();
        setMuted(true);
      }
    }
  };

  const soundIcon = muted ? faVolumeXmark : faVolumeHigh;

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gradient-to-br from-bG1 to-bG2 font-barlow font-semibold -tracking-widest]">
      <div className="fixed top-16 text-center md:top-32 lg:top-24">
        <h1 className="text-rG1 text-3xl md:text-5xl lg:text-4xl animate-fasterBounce lg:shadow-2xl">
          ROCK<span className="text-pG2">PAPER</span>
          <span className="text-sG2">SCISSORS</span>
          <span className="text-white"> -</span>{" "}
          <span className="text-lG2">LIZARD</span>
          <span className="text-spG2">SPOCK</span>
        </h1>
      </div>
      <div className="flex items-center justify-center flex-col gap-10 w-full lg:mt-16">
        <Link
          to="/RegularGame"
          onClick={clickedSound}
          className="flex items-center justify-center text-white text-xl border-2 rounded-md p-2 w-6/12 hover:bg-white hover:text-darkText hover:border-headerOutline lg:w-3/12 hover:animate-fasterBounce"
        >
          <button>Regular Game</button>
        </Link>
        <Link
          to="/BonusGame"
          onClick={clickedSound}
          className="flex items-center justify-center text-white text-xl border-2 rounded-md p-2 w-6/12 hover:bg-white hover:text-darkText hover:border-headerOutline lg:w-3/12 hover:animate-fasterBounce"
        >
          <button>Bonus Game</button>
        </Link>
        <button
          className="text-white text-xl fixed left-3 top-5"
          onClick={toggleSound}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          <FontAwesomeIcon icon={soundIcon} />
        </button>
      </div>
    </div>
  );
};

export default Homepage;
