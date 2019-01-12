import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Container, Row, Col, Alert, Table, Button } from 'reactstrap'
import PostsTable from './PostsTable'

const Api = require('./Api.js')

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    Api.getPosts()
      .then(response => {
        const [error, data] = response
        if (error) {
          this.setState({
            isLoaded: true,
            posts: [],
            error: data
          })
        } else {
          this.setState({
            isLoaded: true,
            posts: data
          })
        }
      })
  }

  render() {
    const { error, isLoaded, posts } = this.state

    if (error) {

      return (
        <Alert color="danger">
          Error: {error}
        </Alert>
      )

    } else if (!isLoaded) {

      return (
        <Alert color="primary">
          Loading...
        </Alert>
      )

    } else {

      return (
        <Container>
          <Row>
            <Col>
              <PostsTable posts={posts}></PostsTable>
              <Link className="btn btn-primary" to="/posts/new">Add Post</Link>
            </Col>
          </Row>
        </Container>
      )

    }

  }
}

export default Posts
