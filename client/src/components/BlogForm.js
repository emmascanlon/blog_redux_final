import React from 'react';
import { connect, } from "react-redux";
import {updateBlog, addBlog} from "../reducers/blogs"
import { Form, } from "semantic-ui-react";


class BlogForm extends React.Component {
  state = { title: "", body: "", author: "", picture: "", };


  componentDidMount() {
    if (this.props.id)
    this.setState({...this.props})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    const blog = {...this.state};
    const func = this.props.id ? updateBlog : addBlog
    dispatch(func(blog))
    this.setState({title: "", body: "", author: "", picture: "",})
    this.props.toggleEdit()
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const {title, body, author, picture} = this.state
    return (
      <div>
       <h3> Add New Blog </h3>
       <Form onSubmit = {this.handleSubmit}>
       <Form.Input 
       label="Title"
       name = "title"
       defaultValue={title}
       value={title}
       onChange = {this.handleChange}/>
       <Form.Input 
       label="Body"
       defaultValue = {body}
       name = "body"
       value={body}
       onChange = {this.handleChange}/>
       <Form.Input 
       label="Author"
       defaultValue={author}
       name = "author"
       value={author}
       onChange = {this.handleChange}/>
       <Form.Input 
       label="Picture"
       name = "picture"
       value={picture}
       onChange = {this.handleChange}/>
      <Form.Button >Submit</Form.Button>
       </Form>
      </div>
    )
  }
}

export default connect()(BlogForm);