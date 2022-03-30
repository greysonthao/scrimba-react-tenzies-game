import React from "react";
import Die from "../src/components/Die";

function App() {
  const [allDice, setAllDice] = React.useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      let randNum = Math.ceil(Math.random() * 6);
      newDice.push(randNum);
    }
    return newDice;
  }

  return (
    <main className="main-container">
      <div className="die-container">
        <Die value={allDice[0]} />
        <Die value={allDice[1]} />
        <Die value={allDice[2]} />
        <Die value={allDice[3]} />
        <Die value={allDice[4]} />
        <Die value={allDice[5]} />
        <Die value={allDice[6]} />
        <Die value={allDice[7]} />
        <Die value={allDice[8]} />
        <Die value={allDice[9]} />
      </div>
    </main>
  );
}

export default App;
