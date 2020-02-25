import React from "react"
import Game from "game"
import { assert } from "chai"
import { mount } from "enzyme"

describe("Game component", () => {
  it("Display headline", () => {
    const wrapper = mount(<Game />)

    assert.strictEqual(wrapper.find("h1").text(), "Insert Switches here.")
  })
})
