import React, { Component } from 'react'
import base, { auth } from '../../../containers/base'

export default class Comment extends Component {
    deleteComment(key) {
        if (!auth.currentUser) {
            alert('You have to login to be able to delete comments!')
            return
        }

        if (window.confirm("Do you really want to delete this comment?")) {
            const commentUser = this.props.comment.user.uid
            const user = auth.currentUser.uid

            if (user === commentUser) {
                base.remove(`/comments/${key}`)
                    .catch(() => alert("There was an error trying to delete the comment. Check your internet status!"))
            } else {
                alert('You can only delete your own comments!')
            }
        }


    }
    render() {
        return (
            <div className="card">
                <span className="card-body">
                    <span style={{marginRight: 10}}>{this.props.comment.user.name}:</span>
                    <span style={{ marginLeft: 0, fontSize: 'small', fontWeight: 'lighter' }}>
                        {this.props.comment.comment}
                    </span>
                    <button type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </span>
            </div>

        )
    }
}




