import React, { Component } from 'react'

export default class NewComment extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
        this.length = this.length.bind(this)
    }
    state = {
        maxChars: 240,
        written: 0
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

    length() {
        let count = this.refs.comment.value.length
        this.setState({
            written: count
        })
    }

    render() {
        return (
            <div className="row" style={{ margin: 10 }}>
                <textarea
                    onKeyUp={this.length}
                    maxLength={this.state.maxChars}
                    ref="comment"
                    placeholder="Write something!"
                    className="form-control">
                </textarea><a style={{ fontSize: 'small', marginTop: 3, marginLeft: 5 }}>Remaining Characters: {this.state.maxChars - this.state.written}</a>
                <div style={{ marginTop: 10, textAlign: 'right', width: '80%' }}>
                    <button className="btn btn-outline-info" onClick={() => this.handleEnter('clear')} style={{ marginRight: 20 }}>Clear</button>
                    <button className="btn btn-primary" onClick={this.handleEnter}>Send</button>
                </div>
            </div>
        )
    }
}
