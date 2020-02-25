import React from "react"

import Switch from "components/switch.jsx"

const Row = ({ children, rowIndex }) => {
  return (
    <tr className="row">
      { children }
    </tr>
  )
}

const Board = ({ toggleSwitch, switches, gameState }) => {
  return (
    <div className="board-container">
      <table className="board">
        <tbody>

          {[0,1,2,3,4].map((rowIndex, index) => {
            return (
              <Row
                key={ "row" + rowIndex }
                rowIndex={ rowIndex }
              >
                {[0,1,2,3,4].map((colIndex, index) => {
                  return (
                    <Switch
                      key={"switch" + colIndex + "/" + rowIndex}
                      col={ colIndex }
                      row={ rowIndex }
                      toggleSwitch={ toggleSwitch }
                      active={ switches[colIndex][rowIndex] }
                      gameState={ gameState }
                    />
                  )
                })}
              </Row>
            )
          })}

        </tbody>
      </table>
  </div>
  )
}

export default Board;
