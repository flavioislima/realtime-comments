import React, { Component } from 'react'
import NewComment from './components/NewComment'
import 'bootstrap-css-only'
import Comments from './components/Comments';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NewComment />
        <Comments />
      </div>
    );
  }
}

export default App
