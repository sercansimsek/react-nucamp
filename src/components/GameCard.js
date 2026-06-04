import { Link } from "react-router-dom";

export const GameCard = ({ game }) => {
  const { name, category } = game;
  return (
    <>
      <div className="bg-light border p-4 m-2">
        <h4>{name}</h4>
        <p>{category}</p>
        <Link to={`/games/${game.id}`}>Details</Link>
      </div>
    </>
  );
};
