import React from "react"

import style from "./section.css"
import ImageUpload from "./ImageUpload.jsx"
import Pics from "./pics.js"

function Section() {
    return (
        <div className={style.container}>
            <ImageUpload />
            <Pics />
        </div>
    )
}

export default Section
