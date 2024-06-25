import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("playing");
  const [previousGuesses, setPreviousGuesses] = React.useState([]);

  function handleGuesses(possibleGuess) {
    const nextGuesses = [...previousGuesses, possibleGuess];
    setPreviousGuesses(nextGuesses);
    if (possibleGuess.toUpperCase() === answer) {
      setGameStatus("win");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  }
  return (
    <>
      <PreviousGuesses previousGuesses={previousGuesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus} />
      {gameStatus === "win" && (
        <WonBanner numGuesses={previousGuesses.length} />
      )}
      {gameStatus === "lose" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
