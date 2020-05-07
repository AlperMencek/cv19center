import React from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

import App from './App';
import Details from'./routes/Details';

reactDOM.render(
    <Router>
    <Switch>
    <Route path = '/details'  component={Details}/>
    <Route path = '/' exact component={App} />

    </Switch>
    </Router>,document.getElementById('root'));