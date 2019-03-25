import React, { Component } from 'react';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BlogForm />
        <Blogs />
      </div>
    );
  }
}

export default App;
