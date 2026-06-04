import { GameCard } from "./GameCard";
import { useState } from "react";

export const HomePage = ({ gamesList }) => {
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
    <>
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
    </>
  );
};
