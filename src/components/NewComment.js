import React, { Component } from 'react'

export default class NewComment extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)

    }

    handleEnter(event) {

        if (event.keyCode === 13) {
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
            event.preventDefault()
        }
    }

    render() {
        return (
            <div className="row" style={{ margin: 10 }}>
                <textarea
                    ref="comment"
                    onKeyDown={this.handleEnter}
                    placeholder="Write something!"
                    className="form-control">
                </textarea>
                <div style={{ marginTop: 10, marginLeft: 760 }}>
                    <button className="btn" style={{ marginRight: 20 }}>Clear</button>
                    <button className="btn btn-info" onClick={this.handleEnter}>Send</button>
                </div>
            </div >
        )
    }
}
