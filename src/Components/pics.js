import React from "react"
import style from "./pics.css"

import {storage, firebase} from "../firebase"
import Pic from "./pic.js"

class Pics extends React.Component {
    constructor() {
        super()
        this.state = {
            allPics: {}
        }
        this.loadFromServer = this.loadFromServer.bind(this)
    }
    loadFromServer() {
        firebase.database().ref('/Posts/').once('value')
            .then(snap => {
                const postsArray = snap.val();
                this.setState({allPics: postsArray})
            })
    }
    componentDidMount() {
        this.loadFromServer();
    }
    render() {
        let upArray = Object.keys(this.state.allPics).map((el) => {
            return <Pic key={this.state.allPics[el].id} url={this.state.allPics[el].url} />
        })
        return(
            <div className={style.centered}>
              <ul>
                {upArray}
              </ul>
            </div>
        )
    }
}

export default Pics
