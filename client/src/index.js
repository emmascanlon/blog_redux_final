import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider } from "react-redux";
import store from './store'
import App from './App';
import {BrowserRouter} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
<App />
</BrowserRouter>
</Provider>, 
document.getElementById('root'));



