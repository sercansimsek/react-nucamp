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
  return (
    <div className="App">
      <h1>My Board Games</h1>
      {gamesList.map((game) => (
        <GameCard game={game} key={game.id}/>
      ))}
    </div>
  );
}

export default App;
