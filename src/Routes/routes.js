import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Auth from '../Components/Auth/Auth.js';
import Dashboard from '../Components/Dashboard/Dashboard.js';
import Form from '../Components/Form/Form.js';
import Post from '../Components/Post/Post.js';

const Routes = (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Form" component={Form} />
        <Route exact path="/Post" component={Post} />
    </Switch>
)
export default Routes



