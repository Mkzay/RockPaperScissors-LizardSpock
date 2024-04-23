import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegularGame from "./Pages/RegularGame";
import BonusGame from "./Pages/BonusGame";
import Rules from "./Components/Rules";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [bgSound, setBgSound] = useState(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/Sounds/know.m4a");
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
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/RegularGame" element={<RegularGame />} />
          <Route exact path="/BonusGame" element={<BonusGame />} />
        </Routes>
      </Router>
      <Rules />
      <button
        className="text-white text-xl fixed left-4 top-1.5 md:top-10 lg:left-5 lg:top-5"
        onClick={toggleSound}
        aria-label={muted ? "Unmute" : "Mute"}
      >
        <FontAwesomeIcon icon={soundIcon} />
      </button>
    </div>
  );
}
