import { useState } from "react";
import "./App.css";
import { GameCard } from "./components/GameCard";

const gamesList = [
  {
    id: 0,
    name: "Machi Koro",
    rating: null,
    category: "Deck Building",
  },
  {
    id: 1,
    name: "Galaxy Trucker",
    rating: null,
    category: "Fun",
  },
  {
    id: 2,
    name: "Monopoly",
    rating: null,
    category: "Fun",
  },
];

function App() {
  const [categoryFilter, setCategoryFilter] = useState("Fun");

  let filteredGames;
  if (categoryFilter === "All") {
    filteredGames = gamesList;
  } else {
    filteredGames = gamesList.filter(
      (game) => game.category === categoryFilter,
    );
  }
  return (
    <div className="App">
      <h1>My Board Games</h1>
      <div>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCategoryFilter("All")}
        >
          All
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setCategoryFilter("Fun")}
        >
          Fun
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCategoryFilter("Deck Building")}
        >
          Deck Building
        </button>
      </div>
      {filteredGames.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
}

export default App;
