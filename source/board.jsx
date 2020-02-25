import React from "react"

import Switch from "switch.jsx"

const Row = ({ children, rowIndex }) => {
  return (
    <tr key={"row" + rowIndex} className="row">
      { children }
    </tr>
  )
}

const Board = ({ toggleSwitch, switches, gameState }) => {
  return (
    <div key="board-container" className="board-container">
      <table key="board" className="board">
        <tbody>

          {[0,1,2,3,4].map((rowIndex, index) => {
            return (
              <Row rowIndex={ rowIndex }>
                {[0,1,2,3,4].map((colIndex, index) => {
                  return (
                    <Switch key={"switch" + colIndex + rowIndex} col={ colIndex }
                      row={ rowIndex } toggleSwitch={ toggleSwitch }
                      active={ switches[colIndex][rowIndex] } gameState={ gameState }/>
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
