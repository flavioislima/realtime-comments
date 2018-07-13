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
                <p className="card-body">
                    <a className="alert alert-info" style={{ marginRight: 0 }}>{this.props.comment.user.name}:</a>
                    <a style={{ marginLeft: 15, fontSize: 'small', fontWeight: 'lighter' }} >{this.props.comment.comment}</a>
                    <button type="button" onClick={() => this.deleteComment(this.props.id)} className="close" aria-label="Close">
                        <span aria-hidden="true">x</span>
                    </button>
                </p>
            </div>
        )
    }
}




