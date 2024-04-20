import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RegularGame from "./Pages/RegularGame";
import BonusGame from "./Pages/BonusGame";
import Rules from "./Components/Rules";

export default function App() {
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
    </div>
  );
}
