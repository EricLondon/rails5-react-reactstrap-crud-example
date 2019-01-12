import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Posts from './Posts'
import PostForm from './PostForm'
import PostDelete from './PostDelete'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Posts} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/posts/new' component={PostForm} />
          <Route
            exact path="/posts/:id/edit"
            render={(routeProps) => (
              <PostForm {...routeProps} />
            )}
          />
          <Route
            exact path="/posts/:id/delete"
            render={(routeProps) => (
              <PostDelete {...routeProps} />
            )}
          />
        </div>
      </Router>
    )
  }
}

export default App
