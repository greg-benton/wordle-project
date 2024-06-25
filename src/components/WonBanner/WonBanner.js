import React from "react";
import Banner from "../Banner";

function WonBanner({ numGuesses }) {
  const statement =
    numGuesses === 1 ? (
      <p>Wow! Got it on the first try!</p>
    ) : (
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>
      </p>
    );
  return <Banner status="happy">{statement}</Banner>;
}

export default WonBanner;
