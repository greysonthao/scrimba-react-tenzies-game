import React from "react";
import Die from "../src/components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    let allHeld = allDice.every((dice) => dice.isHeld);
    let firstValue = allDice[0].value;

    let allSameValue = allDice.every((dice) => dice.value === firstValue);

    if (allHeld === true && allSameValue === true) {
      setTenzies(true);
      console.log("You won!");
    }
  }, [allDice]);

  React.useEffect(() => {}, [tenzies]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  const dieElements = allDice.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  function reRoll() {
    if (tenzies === false) {
      setAllDice((prevAllDice) => {
        return prevAllDice.map((dice) => {
          return dice.isHeld === true ? dice : generateNewDie();
        });
      });
    } else {
      setTenzies(false);
      setAllDice(allNewDice());
    }
  }

  function holdDice(id) {
    setAllDice((prevAllDice) => {
      return prevAllDice.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      });
    });
  }

  return (
    <main className="main-container">
      {tenzies && <Confetti />}
      <h1 className="main-title">Tenzies</h1>
      <p className="main-instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{dieElements}</div>
      <button className="roll-btn" onClick={reRoll}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
