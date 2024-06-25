import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import Cell from "../Cell";

function GuessSlots({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default GuessSlots;
