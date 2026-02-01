import { languages } from "./languages";
import React from "react";
import { clsx } from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import ReactConfetti from "react-confetti";
export default function App() {
  // state values
  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  //derives values
  let guessedWrong = 0;
  const wrongGuessCount = guessedLetters.filter((letter) => {
    return !currentWord.includes(letter.toLowerCase());
  });
  const isGameWon = currentWord.split("").every((letter) => {
    return guessedLetters.includes(letter.toUpperCase());
  });
  const isGameLost = wrongGuessCount.length >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const lastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter.toLowerCase());

  //static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  guessedLetters.forEach((letter) => {
    if (!currentWord.includes(letter.toLowerCase())) guessedWrong += 1;
  });

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetter) => {
      return prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter];
    });
  }

  const keyboardElement = alphabet.split("").map((item) => {
    const letter = item.toUpperCase();
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect =
      isGuessed && currentWord.split("").includes(letter.toLowerCase());
    const isWrong =
      isGuessed && !currentWord.split("").includes(letter.toLowerCase());
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        disabled={isGameOver}
        className={className}
        aria-disabled={guessedLetters.includes(letter)}
        onClick={() => addGuessedLetter(item.toUpperCase())}
        key={item}
      >
        {item.toLocaleUpperCase()}
      </button>
    );
  });

  const word = currentWord.split("").map((char, index) => {
    const revealWord =
      isGameLost || guessedLetters.includes(char.toUpperCase());
    const letterClassName = clsx(
      isGameLost &&
        !guessedLetters.includes(char.toUpperCase()) &&
        "missed-letter",
    );
    return (
      <span className={letterClassName} key={index}>
        {revealWord ? char.toUpperCase() : ""}
      </span>
    );
  });

  const languagesChips = languages.map((item, index) => {
    const isLost = index < guessedWrong ? true : false;

    const className = clsx("chip", {
      lost: isLost,
    });
    return (
      <span
        key={item.name}
        className={className}
        style={{ backgroundColor: item.backgroundColor, color: item.color }}
      >
        {item.name}
      </span>
    );
  });

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && lastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && lastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[guessedWrong - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h3>You Win!</h3>
          <p>Well done🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h3>You Lose!</h3>
          <p>Better start learning Assembly!</p>
        </>
      );
    }

    return null;
  }

  function resetGame() {
    setCurrentWord(() => getRandomWord());
    setGuessedLetters(() => []);
  }

  return (
    <main>
      <header>
        {isGameWon && <ReactConfetti recycle={false} numberOfPieces={1000} />}
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word under 8 attemps to keep the programming world safe from
          Assembly!
        </p>
      </header>
      <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatus()}
      </section>
      <section className="language-chips">{languagesChips}</section>
      <section className="word">{word}</section>
      <section className="keyboard">{keyboardElement}</section>
      {isGameOver && (
        <button className="new-game-btn" onClick={resetGame}>
          New Game
        </button>
      )}
    </main>
  );
}
