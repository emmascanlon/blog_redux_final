import React from 'react';
import {connect, } from "react-redux";
import {Container, Header, Card, Image, } from "semantic-ui-react"
import { Link, } from 'react-router-dom';
import {getBlogs } from '../reducers/blogs'

class Blogs extends React.Component {
componentDidMount() {
  this.props.dispatch(getBlogs())
}

blogs = () => {
  return this.props.blogs.map( blog =>
    <Card key={ blog.id }>
    <Image src= {blog.picture} />
    <Card.Content>
      <Card.Header>
        {blog.title}
      </Card.Header>
      <Card.Meta>
        <span>
          {blog.author}
        </span>
      </Card.Meta>
      <Card.Description>
        {blog.body}
      </Card.Description>
      <Link to={`/blogs/${blog.id}`}>View Blog
      </Link>
    </Card.Content>
    </Card>
  )
}
render() {
  return (
    <Container>
      <Header as="h3" textAlign="center">Blogs</Header>
      <Card.Group itemsPerRow={4}>
      {this.blogs() }
      </Card.Group>
    </Container>
  )
}
}
    const mapStateToProps = (state) => {
      return { blogs: state.blogs, };
    }
 

export default connect(mapStateToProps)( Blogs)