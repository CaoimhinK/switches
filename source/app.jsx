import React, { Component, useState } from "react"

const Header = ({ gameState, abortGame, startGame }) => {
  return (
    <div className="header">
      {(gameState == "pre_game") && <div>SWITCHES</div>}
      {(gameState == "in_game") && <div>TAP A SWITCH</div>}
      {(gameState == "post_game") && <div>VICTORY</div>}
      {(gameState == "post_game") && <button id="restart" onClick={ startGame }>RESTART</button>}
      {(gameState == "in_game") && <button id="abort" onClick={ abortGame }>ABORT</button>}
    </div>
  )
}

const Footer = ({ gameState, clicks, startGame }) => {

  return (
    <div className="footer">
      {(gameState == "pre_game") && <button id="start" onClick={ startGame }>START GAME</button>}
      {(gameState == "in_game" || gameState == "post_game") && <div className="counter">{ clicks } BUTTONS PRESSED</div>}
    </div>
  )
}

const Switch = ({ col, row, toggleSwitch, active, gameState }) => {
  const activate = () => {
    toggleSwitch(row, col);
  }

  return (
    <td className="switch" onClick={activate}>
      {(gameState == "post_game") && <div className="win" />}
      {(!(gameState == "post_game") && !!active) && <div className="fill" />}
    </td>
  )
}

const Board = ({ toggleSwitch, switches, gameState }) => {
  return (
    <div className="board-container">
      <table className="board">
        {[0,1,2,3,4].map((colIndex, index) => {
          return (
            <tr className="row">
              {[0,1,2,3,4].map((rowIndex, index) => {
                return <Switch col={ colIndex } row={ rowIndex } toggleSwitch={ toggleSwitch } active={ switches[colIndex][rowIndex] } gameState={ gameState }/>
              })}
            </tr>
          )
        })}
      </table>
  </div>
  )
}

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


  const [clicks, setClicks] = useState(0);
  const [switches, setSwitches] = useState(createSwitches());
  const [gameState, setGameState] = useState("pre_game");


  const createRandomStartState = () => {

    let randomStartStateIndex = Math.floor(Math.random() * 3);

    setSwitches(START_STATES[randomStartStateIndex]);
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

      if (isFull()) {
        setGameState("post_game");
      }
    }
  }

  const abortGame = () => {
    setSwitches(createSwitches());
    setGameState("pre_game");
  }

  const startGame = () => {
    createRandomStartState();
    setClicks(0);
    setGameState("in_game");
  }

  const isFull = () => {
    return switches.every((column) => column.every((row) => row))
  }

  return (
    <div className="game">
      <Header gameState={ gameState } abortGame={ abortGame } startGame={ startGame } />
      <Board toggleSwitch={ toggleSwitch } switches={ switches } gameState={ gameState }/>
      <Footer clicks={ clicks } gameState={ gameState } startGame={ startGame } />
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}
