import React, { Component } from 'react'
import Comment from './Comment';

export default class Comments extends Component {
    renderComment(key, comment) {
        return (
            <Comment key={key} comment={comment} />
        )
    }
    render() {
        return (
            <div className="alert alert-link">
                Actual Comments:
                {Object.keys(this.props.comments).map(key => this.renderComment(key, this.props.comments[key]))}
            </div>
        )
    }
}
