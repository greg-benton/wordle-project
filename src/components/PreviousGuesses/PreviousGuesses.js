import React from "react";
import GuessSlots from "../GuessSlots";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
function PreviousGuesses({ previousGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessSlots key={num} guess={previousGuesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
