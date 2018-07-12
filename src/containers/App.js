import React, { Component } from 'react'
import NewComment from '../components/NewComment/NewComment'
import 'bootstrap-css-only'
import Comments from '../components/Comments/Comments'

class App extends Component {
  constructor(props) {
    super(props)
    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isLoggedIn: true, user
        })
      } else {
        this.setState({
          isLoggedIn: false, user: {}
        })
      }
    })
  }

  postNewComment(comment) {
    comment.user = {
      name: this.state.user.displayName,
      uid: this.state.user.uid
    }
    console.log(comment)

    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({ comments })
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ marginLeft: '35%' }}>Realtime Comments System{this.state.isLoggedIn && <button style={{ marginLeft: 50 }} onClick={() => this.props.auth.signOut()} className="btn btn-link">LogOff</button>}</h2>
        {!this.state.isLoggedIn && <div className="alert alert-info">
          <button className="btn" onClick={() => this.auth('facebook')}>Facebook Login</button>
          <button style={{ marginLeft: 10 }} className="btn btn-info" onClick={() => this.auth('google')}>Google Login</button>
        </div>}
        {this.state.isLoggedIn && <NewComment postNewComment={this.postNewComment} />}
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App
