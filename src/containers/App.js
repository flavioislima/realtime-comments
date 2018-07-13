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

    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({ comments })
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
      .then((r) => console.log(r))
      .catch((err) => {
        if (err.code === 'auth/account-exists-with-different-credential') {
          alert('There is a user created with this credentials!. Please, try to login with Google!')
        }
      })
  }

  logout() {
    if (window.confirm("Do you really want to leave?")) {
      this.props.auth.signOut()
    }
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Realtime Comments System{this.state.isLoggedIn && <button style={{ marginLeft: 50 }} onClick={() => this.logout()} className="btn btn-link">LogOff</button>}</h2>
        <div style={{ textAlign: 'center' }} >
          {!this.state.isLoggedIn && <div className="alert alert-info">
            <button className="btn" onClick={() => this.auth('facebook')}>Facebook Login</button>
            <button style={{ marginLeft: 10 }} className="btn btn-info" onClick={() => this.auth('google')}>Google Login</button>
          </div>}
          {this.state.isLoggedIn && <NewComment postNewComment={this.postNewComment} />}
        </div>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App
