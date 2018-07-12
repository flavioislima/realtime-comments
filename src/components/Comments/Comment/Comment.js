import React, { Component } from 'react'
import base, { auth } from '../../../containers/base'

export default class Comment extends Component {
    deleteComment(key) {
        const commentUser = this.props.comment.user.uid
        const user = auth.currentUser.uid

        if (user === commentUser) {
            base.remove(`/comments/${key}`)
                .then((result) => console.log(result))
                .catch((err) => console.error(err))
        } else {
            alert('You can only delete your own comments!')
        }

    }
    render() {
        return (
            <div className="card">
                <p className="card-body">
                    <a className="alert alert-info" style={{ marginRight: 15 }}>{this.props.comment.user.name}:</a>
                    {this.props.comment.comment}
                    <button type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </p>
            </div>
        )
    }
}




