import confetti from "./assets/confetti.gif";
import React, { useState, useEffect } from "react";

function Result({ isWinner }) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isWinner) {
      setShowConfetti(true);
      const timeout = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isWinner]);

  return (
    <div className="result">
      {showConfetti && (
        <>
          <img src={confetti} alt="Confetti" />
          <h2>Congratulations, You win 🎉</h2>
        </>
      )}
    </div>
  );
}

export default Result;
