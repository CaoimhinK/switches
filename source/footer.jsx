import React from "react"

const Footer = ({ gameState, clicks, startGame }) => {

  return (
    <div key="footer" className="footer">
      {(gameState == "pre_game") && <button key="startButton" id="start" onClick={ startGame }>START GAME</button>}
      {(gameState == "in_game" || gameState == "post_game") && <div key="counter" className="counter">{ clicks } BUTTONS PRESSED</div>}
    </div>
  )
}

export default Footer;
