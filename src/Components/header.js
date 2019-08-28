import React from "react"

function Header(props) {
    return (
      <div>
        <div style={{textAlign: "center", width: "40%", height: "80px", border: "5px solid #fff", position: "relative", top: "5px", boxSizing: "content-box", left: '30%', color: '#fff', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '5px', display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1 style={{fontSize: '2em', letterSpacing: '5px', fontVariant: "small-caps"}}>{props.title}</h1>
        </div>
      </div>
    )
}

export default Header
