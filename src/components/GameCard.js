export const GameCard = (props) => {
  return (
    <>
      <h4>{props.game.name}</h4>
      <p>{props.game.category}</p>
    </>
  );
};
