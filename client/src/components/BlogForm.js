import React from 'react';
import { connect, } from "react-redux";

class BlogForm extends React.Component {
  state = { title: "", body: "", author: "", picture: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    const {name, } = this.state;
    dispatch({ type: "ADD_BLOG", blog: name, })
    this.setState({title: "", body: "", author: "", picture: "",})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  }

  render() {
    const {title, body, author, picture} = this.state
    return (
      <div>
       <h3> Add New Blog </h3>
       <form onSubmit = {this.handleSubmit}>
       <input 
       label="Title"
       name = "title"
       defaultValue={title}
       value={title}
       onChange = {this.handleChange}/>
       <input 
       label="body"
       defaultValue = {body}
       name = "body"
       value={body}
       onChange = {this.handleChange}/>
       <input 
       label="author"
       defaultValue={author}
       name = "author"
       value={author}
       onChange = {this.handleChange}/>
       <input 
       name = "picture"
       value={picture}
       onChange = {this.handleChange}/>

       </form>
      </div>
    )
  }
}

export default connect()(BlogForm);