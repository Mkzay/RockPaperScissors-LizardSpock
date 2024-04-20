import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [bgSound, setBgSound] = useState(null);
  const [muted, setMuted] = useState(false);

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
    <div className="flex items-center justify-center flex-col gap-10 h-screen bg-gradient-to-br from-bG1 to-bG2 font-barlow font-semibold -tracking-widest">
      <Link
        to="/RegularGame"
        className="flex items-center justify-center text-white text-xl border-2 rounded-md p-2 w-6/12 hover:bg-white hover:text-darkText hover:border-headerOutline lg:w-3/12"
      >
        <button>Regular Game</button>
      </Link>
      <Link
        to="/BonusGame"
        className="flex items-center justify-center text-white text-xl border-2 rounded-md p-2 w-6/12 hover:bg-white hover:text-darkText hover:border-headerOutline lg:w-3/12"
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
  );
};

export default Homepage;
