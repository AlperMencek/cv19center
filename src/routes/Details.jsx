import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DetailsCard} from '../components';

import {Cards, GlobalCard, Charts, SearchBar, Standings} from '../components';

class Details extends React.Component{
    state = {
        selectionTitle: '',
    }
    async componentDidMount(){
        const {handle} = this.props.match.params;
        const {title} = this.props.location.state;
        console.log(this.props.location.state)
        this.setState({selectionTitle:title})
    }
    render(){
     const {selectionTitle} = this.state
     console.log(selectionTitle)
    return(
        <div>
            <h1>Details Page</h1>
            <DetailsCard/>
        </div>
     
        )
    }
}

export default Details;