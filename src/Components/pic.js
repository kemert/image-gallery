import React from "react"
import style from "./pic.css"

function Pic(props) {
    let num = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
    let url
    const click = (e) => {
        url = e.target.src;
        window.open(url)
    }
    return(
      <li style={{transform: `rotate(${num}deg)`, position: 'relative'}} className={style.pic}>
            <img src={props.url} className={style.image} onClick={click}/>
      </li>
    )
}

export default Pic
