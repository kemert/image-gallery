import React from "react"

function Pic(props) {
    let num = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10)
    return(
        <div style={{width: '249px', height: '349px', borderRadius: '5px', display: 'inline-block', margin: '20px', transform: `rotate(${num}deg)`, boxShadow: '8px 10px 10px black'}}>
            <img src={props.url} style={{width: '250px', height: '350px', borderRadius: '5px'}}/>
        </div>
    )
}

export default Pic
