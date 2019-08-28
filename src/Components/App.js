import React from "react"

import Header from "./header.js"
import Section from "./section.js"
import style from "./App.css"

function App() {
    return (
      <div style={{overflowX:"hidden"}}>
        <Header title="Images Collection"/>
        <Section />
      </div>
    )
}

export default App
