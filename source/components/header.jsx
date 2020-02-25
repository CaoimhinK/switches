import React from "react"

const Header = ({ gameState, abortGame, startGame }) => {
  return (
    <div className="header">
      {(gameState == "pre_game") && <div >SWITCHES</div>}
      {(gameState == "in_game") && <div >TAP A SWITCH</div>}
      {(gameState == "post_game") && <div >VICTORY</div>}
      {(gameState == "post_game") && <button className="header__restart" onClick={ startGame }>RESTART</button>}
      {(gameState == "in_game") && <button className="header__abort" onClick={ abortGame }>ABORT</button>}
    </div>
  )
}

export default Header;
