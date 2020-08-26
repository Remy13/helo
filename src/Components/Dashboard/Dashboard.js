import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux'; 
import "./Dashboard.css";
import reducer from '../../Ducks/reducer';

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            search: "",
            userposts: true
        }
    }
    componentDidMount(){
        axios.get ( "/posts" + this.props.user.id ).then(response  =>{
           console.log(response) 

        })
    console.log(this.props)
    }



    render(){
        return ( 
        <div> 
            <div>dashboard</div>
            <div>nav bar</div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
      user: state.user
    }
  };

export default connect(mapStateToProps)(Dashboard);






