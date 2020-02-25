import React, { useState } from "react"

import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Board from "./board.jsx";

const Game = () => {

  const START_STATES = [
      [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
      ],[
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],[
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0]
      ]
  ];

  const createSwitches = () => {
    let switches = [];
    for (let x = 0; x < 5; x++) {
      let row = [];
      for (let y = 0; y < 5; y++) {
        row.push(false);
      }
      switches.push(row);
    }
    return switches;
  }


  const [gameState, setGameState] = useState("pre_game");
  const [clicks, setClicks] = useState(0);
  const [switches, setSwitches] = useState(createSwitches());


  const setRandomStartState = () => {

    let randomStartStateIndex = Math.floor(Math.random() * 3);

    setSwitches(START_STATES[randomStartStateIndex]);
  }

  const hasPlayerWon = () => {
    return switches.every((column) => column.every((row) => row))
  }

  const toggleSwitch = (row, column) => {
    if (gameState == "in_game") {
      setClicks(clicks + 1);

      let current = switches.slice();

      current[column][row] = !current[column][row];

      if(column < 4) {
        current[column+1][row] = !current[column+1][row]
      }
      if(row < 4) {
        current[column][row+1] = !current[column][row+1]
      }
      if (column > 0) {
        current[column-1][row] = !current[column-1][row]
      }
      if (row > 0) {
        current[column][row-1] = !current[column][row-1]
      }
      setSwitches(current);

      if (hasPlayerWon()) {
        setGameState("post_game");
      }
    }
  }

  const abortGame = () => {
    setSwitches(createSwitches());
    setGameState("pre_game");
  }

  const startGame = () => {
    setRandomStartState();
    setClicks(0);
    setGameState("in_game");
  }

  return (
    <div className="game">
      <Header gameState={ gameState } abortGame={ abortGame } startGame={ startGame } />
      <Board toggleSwitch={ toggleSwitch } switches={ switches } gameState={ gameState }/>
      <Footer clicks={ clicks } gameState={ gameState } startGame={ startGame } />
    </div>
  )
}

export default Game;
