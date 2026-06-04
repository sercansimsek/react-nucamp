import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TEST_GAMES } from "./TEST_GAMES";
import "./App.css";

import { HomePage } from "./components/HomePage";
import { RandomPage } from "./components/RandomPage";

function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES);

  return (
    <div className="App">
      <h1>My Board Games</h1>
      <Link to="/" className="btn-link me-3">
        Home
      </Link>
      <Link to="/random" className="btn-link">
        Random
      </Link>
      <Routes>
        <Route path="/" element={<HomePage gamesList={gamesList} />}></Route>
        <Route
          path="/random"
          element={<RandomPage gamesList={gamesList} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
