import React, { Component } from 'react'

export default class NewComment extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)

    }

    handleEnter(command) {
        if (command === 'clear') {
            this.refs.comment.value = ''
        } else {
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
        }
    }

    render() {
        return (
            <div className="row" style={{ margin: 10 }}>
                <textarea
                    ref="comment"
                    placeholder="Write something!"
                    className="form-control">
                </textarea>
                <div style={{ marginTop: 10, marginLeft: 760 }}>
                    <button className="btn btn-outline-info" onClick={() => this.handleEnter('clear')} style={{ marginRight: 20 }}>Clear</button>
                    <button className="btn btn-primary" onClick={this.handleEnter}>Send</button>
                </div>
            </div>
        )
    }
}
