import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Table, Button } from 'reactstrap'

class PostsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts
    }
  }

  render() {
    const posts = this.state.posts
    if (posts.length === 0) {
      return <div></div>
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Link className="btn btn-success" to={`/posts/${post.id}/edit`}>Edit</Link>{' '}
                  <Link className="btn btn-danger" to={`/posts/${post.id}/delete`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
    }
  }
}

export default PostsTable
