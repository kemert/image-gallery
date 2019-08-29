import React from "react"
import {storage, firebase} from "../firebase"

import style from "./ImageUpload.css"

class ImageUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            url: "",
            progress: 0,
            pushed: false,
            displayModal: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.mouseDown = this.mouseDown.bind(this)
        this.mouseUp = this.mouseUp.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    handleChange(e) {
        if(e.target.files[0]) {
            const image = e.target.files[0]
            this.setState({image})
        }
    }
    handleUpload(e) {
        const {image} = this.state
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on("state_changed",
            (snapshot) => {
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
              this.setState({progress})
            },
            (err) => {
              console.log(err)
            },
            () => {
                // on completed
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url})
                    const postKey = firebase.database().ref('Posts/').push().key;
                    let updates = {}
                    let postData = {
                      id: postKey,
                      url: url
                    }
                    updates['Posts/' + postKey] = postData
                    firebase.database().ref().update(updates)
                })
                if (this.state.progress === 100) {
                  setTimeout(() => {alert("Updated succesfully. Refresh page to update gallery.")}, 1000)
                }
            })
    }
    mouseDown() {
      this.setState({pushed: true})
    }
    mouseUp() {
      this.setState({pushed: false})
    }
    mouseOut() {
      this.setState({pushed: false})
    }
    openModal() {
      this.setState((prev) => {
          if (prev.displayModal == false) {
            return {
              displayModal: true
            }
          }
      })
    }
    closeModal() {
      this.setState((prev) => {
          if (prev.displayModal == true) {
            return {
              displayModal: false,
              url: "",
              progress: 0
            }
          }
      })
    }
    render() {
      const pushedButt = {
        boxShadow: "1px 1px 1px black",
        transform: "translateY(2px)"
      }
        return (
          <div>
            <button onClick={this.openModal}
                    className={style.openModalButton}>
                    {this.props.title}

            </button>

            <div style={{display: this.state.displayModal ? "flex" : "none"}} className={style.modal}>
              <div className={style.modalContent}>
                <span onClick={this.closeModal} className={style.closeModalButton}>&#10060;</span>
                <progress value={this.state.progress} max="100" />

                <br />

                {this.state.url ?
                    <img src={this.state.url}
                         alt="uploaded image"
                         height="150"
                         width="200"
                         className={style.imgPreview}
                    /> :
                    <div className={style.imgPlaceholder}>Place for your file</div>
                }

                <input type="file" onChange={this.handleChange}  />

                <br />

                <button className={style.upload}
                        style={this.state.pushed ? pushedButt : null}
                        onClick={this.handleUpload}
                        onMouseDown={this.mouseDown}
                        onMouseUp={this.mouseUp}
                        onMouseOut={this.mouseOut}>Upload
                </button>
              </div>
            </div>
          </div>
        )
    }
}

export default ImageUpload
