import React from "react"

const Footer = ({ gameState, clicks, startGame }) => {

  return (
    <div className="footer">
      {(gameState == "pre_game") && <button className="footer__start" onClick={ startGame }>START GAME</button>}
      {(gameState == "in_game" || gameState == "post_game") && <div className="footer__counter">{ clicks } BUTTONS PRESSED</div>}
    </div>
  )
}

export default Footer;
