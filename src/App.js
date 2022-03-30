import React from "react";
import Die from "../src/components/Die";

function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());
  console.log(allDice);

  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      let Dice = {
        value: 0,
        isHeld: false,
      };
      Dice.value = Math.ceil(Math.random() * 6);
      newDice.push(Dice);
    }
    return newDice;
  }

  const dieElements = allDice.map((dice) => <Die value={dice.value} />);

  function reRoll() {
    return setAllDice(allNewDice());
  }

  return (
    <main className="main-container">
      <div className="die-container">{dieElements}</div>
      <button className="roll-btn" onClick={reRoll}>
        Roll
      </button>
    </main>
  );
}

export default App;
