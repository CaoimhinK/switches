import React from "react"

const Header = ({ gameState, abortGame, startGame }) => {
  return (
    <div key="header" className="header">
      {(gameState == "pre_game") && <div key="header_switches">SWITCHES</div>}
      {(gameState == "in_game") && <div key="header_tap_a_switch">TAP A SWITCH</div>}
      {(gameState == "post_game") && <div key="header_victory">VICTORY</div>}
      {(gameState == "post_game") && <button id="restart" key="header-restart" onClick={ startGame }>RESTART</button>}
      {(gameState == "in_game") && <button id="abort" key="header-abort" onClick={ abortGame }>ABORT</button>}
    </div>
  )
}

export default Header;
