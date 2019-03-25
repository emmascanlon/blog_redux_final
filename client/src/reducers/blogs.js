import axios from "axios";
import Blogs from "../components/Blogs";

const BLOGS = "BLOGS"
const ADD_BLOG = "ADD_BLOG"
export const getBlogs = () => {
  return (dispatch) => {
    axios.get(`/api/blogs`)
    .then( res => dispatch({ type: BLOGS, blogs: res.data}))
  }}


const blogs = (state = [], action ) => {
  switch(action.type) {
    case BLOGS:
    return action.blogs
    case ADD_BLOG:
    return [action.blog, ...state];
    default:
    return state 
  }
}

export default blogs;