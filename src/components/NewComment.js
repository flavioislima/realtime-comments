import React, { Component } from 'react'

export default class NewComment extends Component {
    render() {
        return (
            <div className="row">
                <textarea placeholder="Write something!" className="form-control"></textarea>
            </div>
        )
    }
}
