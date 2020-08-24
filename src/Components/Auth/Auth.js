import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from "axios"; 
import {getUser, registerUser} from "../../Ducks/reducer.js";
import "./Auth.css";

class Auth extends React.Component {
        constructor(props) {
          super(props)
          this.login = this.login.bind(this);
          this.state = {
            username: "",
            password: ""
          }
        };
handleChange= e => {
    this.setState({...this.state,[e.target.name]: e.target.value})
}
    
login= () => {
    axios.get("/login" + "?username=" + this.state.username + "&password=" + this.state.password).then( (response) => {
        if (response.status === 200){
            this.props.history.push('/dashboard')
        }   
    })
}

register= () => {
    axios.post('/register', {username: this.state.username, password: this.state.password}).then( (response) => {
        if (response.status === 200){
            this.props.registerUser(response.data.value[0])
            this.props.history.push('/dashboard')
        }
    })
}
    render() {
        return (
            <div>
                <input placeholder="username" type="text" name="username" onChange={this.handleChange} />
                <input placeholder="password" type="text" name="password" onChange={this.handleChange} />
                <button onClick={
                    this.login
                }>Login</button>
                <button onClick={
                    this.register
                }>Register</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
      user: state.user
    }
  };

export default connect(mapStateToProps, { getUser, registerUser })(Auth);

// export default connect(mapStateToProps, {getPokemon})(App);