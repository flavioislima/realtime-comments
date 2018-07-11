import React, { Component } from 'react'
import NewComment from './components/NewComment'
import 'bootstrap-css-only'
import Comments from './components/Comments';

class App extends Component {
  constructor(props) {
    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      comments: {
        '1': { comment: 'Example Comment 1' },
        '2': { comment: 'Example Comment 2' },
        '3': { comment: 'Example Comment 3' },
      }
    }
  }

  postNewComment(comment) {
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({ comments })
  }

  render() {
    return (
      <div className="container">
        <NewComment postNewComment={this.postNewComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App
