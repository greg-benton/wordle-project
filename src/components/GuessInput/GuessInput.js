import React from "react";

function GuessInput({ handleGuesses, gameStatus }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleGuesses(possibleGuess);
    console.log("received guess: ", possibleGuess);
    setPossibleGuessGuess("");
  }
  const [possibleGuess, setPossibleGuessGuess] = React.useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "playing"}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={possibleGuess}
        onChange={(event) => {
          setPossibleGuessGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
