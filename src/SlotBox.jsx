import Slots from "./Slots";

function SlotBox({ games }) {
  return (
    <div className="slot-box">
      {games.map((game) => (
        <Slots game={game} key={game.id} />
      ))}
    </div>
  );
}

export default SlotBox;
