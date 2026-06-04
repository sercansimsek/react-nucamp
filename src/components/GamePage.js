import { useParams } from "react-router-dom";

export const GamePage = ({ gamesList }) => {
  const { gameId } = useParams();
  const game = gamesList.find((g) => g.id === parseInt(gameId));

  if (!game) {
    return <h2>Game not found!</h2>;
  }
  return (
    <div>
      <h3>{game.name}</h3>
      <p>{game.category}</p>
      <p>{game.rating}</p>
    </div>
  );
};
