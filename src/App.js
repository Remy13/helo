import React from 'react';
import Routes from "./Routes/Routes.js";
import {Switch, Route} from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Form from "./Components/Form/Form.js";
import Auth from "./Components/Auth/Auth.js";
import Post from './Components/Post/Post.js';
import Nav from "./Components/Nav/Nav.js";
import './App.css';
// import './reset.css';

class App extends React.Component {
  render(){
    return <div>
            {Routes}
          </div>
  }
}

export default App;
