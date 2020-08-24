import React, { Component } from 'react';
import axios from "axios"; 
import "./Dashboard.css";
import reducer from '../../Ducks/reducer';
import { render } from '@testing-library/react';

export default class Dashboard extends React.Component {
    constructor() {
      super()
      this.state = {
        posts: [],
        search: "",
        userposts: true
      }
    }

componentDidMount(){
    // axios.get ( "/posts/" + )
}
    render(){
        return ( 
        <div> 
            <div>dashboard</div>
            <div>nav bar</div>
        </div>
    )}
}







