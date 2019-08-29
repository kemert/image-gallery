import React from "react"

import Header from "./header.js"
import Section from "./section.js"
import ImageUpload from "./imageUpload.js"
import style from "./App.css"

function App() {
    return (
      <div style={{overflowX:"hidden"}} className={style.container}>
        <Header title="Images Collection"/>
        <Section />
        <ImageUpload title="Add"/>
      </div>
    )
}

export default App
