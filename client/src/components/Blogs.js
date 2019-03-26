import React from 'react';
import {connect, } from "react-redux";
import {Container, Header, Card, Image, Button } from "semantic-ui-react"
import { Link, } from 'react-router-dom';
import {getBlogs } from '../reducers/blogs'
import BlogForm from './BlogForm'
import { deleteBlog} from "../reducers/blogs";

class Blogs extends React.Component {
  state = { editing: false,}
componentDidMount() {
  this.props.dispatch(getBlogs())
}

toggleEdit = () => {
  this.setState( state => {
    return { editing: !state.editing, }
  })
}

// handleDelete = () => {
// const { blog, dispatch, history: {push} } = this.props
// dispatch(deleteBlog(blog.id));
// push("/blogs")
// }



blogs = () => {
  return this.props.blogs.map( blog =>
    <Card key={ blog.id }>
    <Image src= {blog.picture} />
    <Card.Content>
      { this.state.editing ? <BlogForm toggleEdit={this.toggleEdit}/> : 
      <div><Card.Header>
        {blog.title}
      </Card.Header>
      <Card.Meta>
        <span>
          {blog.author}
        </span>
      </Card.Meta>
      <Card.Description>
        {blog.body}
      </Card.Description> </div> }
      <Button><Link to={`/api/blogs/${blog.id}`}>View Blog
      </Link></Button>
      <Button onClick={this.handleDelete}>Delete</Button>
      <Button onClick={this.toggleEdit}>
      { this.state.editing ? 'Cancel' : 'Edit' }
      </Button> 
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