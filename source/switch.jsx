import React from "react"

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

export default Switch;
