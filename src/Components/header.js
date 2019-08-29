import React from "react"
import style from "./header.css"

function Header(props) {
    return (
        <div className={style.header}>
            <h1 className={style.headerContent}>{props.title}</h1>
        </div>
    )
}

export default Header
