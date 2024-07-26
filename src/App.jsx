import React, { useState } from "react";
import "./App.css";
import SlotBox from "./SlotBox";
import Button from "./Button";
import Result from "./Result";

function App() {
  const fruits = [
    { emoji: "🥝", id: 111 },
    { emoji: "🥀", id: 222 },
    { emoji: "🍇", id: 333 },
  ];

  const [games, setGames] = useState(fruits);

  const handleSetGames = () => {
    const shuffledFruits = fruits.map((fruit) => ({
      ...fruit,
      emoji: fruits[Math.floor(Math.random() * fruits.length)].emoji,
    }));
    setGames(shuffledFruits);
  };

  const isWinner = () => {
    const firstEmoji = games[0]?.emoji;
    return games.every((game) => game.emoji === firstEmoji);
  };

  return (
    <>
      <div className="left-side">
        <h1>Slot Game</h1>
      </div>

      <div className="right-side">
        <h1 className="title">lot Machine</h1>
        <SlotBox games={games} />
        <Button onSetGames={handleSetGames} />
        <Result isWinner={isWinner()} />
      </div>
    </>
  );
}

export default App;
