import { useState } from "react";
import { TEST_GAMES } from "./TEST_GAMES";
import "./App.css";

import { HomePage } from "./components/HomePage";

function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES);

  return (
    <div className="App">
      <h1>My Board Games</h1>

      <HomePage gamesList={gamesList} />
    </div>
  );
}

export default App;
