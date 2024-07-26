import confetti from "./assets/confetti.gif";

function Result({ isWinner }) {
  return (
    <div className="result">
      {isWinner && (
        <>
          <h2>Congratulations, You won 🎉</h2>
          <img src={confetti} />
          {window.alert("refresh to play again")}
        </>
      )}
    </div>
  );
}

export default Result;
