import React, { Component } from 'react'
import base from '../../../containers/base'

export default class Comment extends Component {
    deleteComment(key) {
        base.remove(`/comments/${key}`)
            .then((result) => console.log(result))
            .catch((err) => console.error(err))
    }
    render() {
        return (
            <div className="card">
                <p className="card-body">{this.props.comment.comment}
                    <button type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </p>
            </div>
        )
    }
}




