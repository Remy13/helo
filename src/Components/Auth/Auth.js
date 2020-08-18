import React, { Component } from 'react'; 
import "./Auth.css";

export default class Auth extends React.Component {
        constructor() {
          super()
          this.login = this.login.bind(this);
          this.state = {
            username: "",
            password: ""
          }
        };
              login=()=> {
                  console.log("hitLogin")
              }
    render() {
        return (
            <div>
                <input placeholder="username" type="text" name="username" />
                <input placeholder="password" type="text" name="password" />
                <button onClick={
                    this.login
                }>Login</button>
            </div>
        )
    }
}