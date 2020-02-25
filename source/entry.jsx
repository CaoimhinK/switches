require("index.html")
require("stylesheets/style.scss")

import React from "react"
import ReactDOM from "react-dom"
import Game from "game"

ReactDOM.render(
  <Game />,
  document.getElementById("game")
)
