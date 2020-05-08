import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DetailsCard} from '../components';
import styles from './details.module.css'

import {Cards, GlobalCard, Charts, SearchBar, Standings} from '../components';

class Details extends React.Component{
    state = {
        selectionTitle: '', 
        slugTitle: '',
        newConfirmed: '',
        totalConfirmed: '',
        newDeaths: '',
        totalDeaths: '',
        newRecovered: '',
        totalRecovered: '',
        update: '',
        
    }
    async componentDidMount(){
        const {handle} = this.props.match.params;
        const {title} = this.props.location.state;
        const {slug} = this.props.location.state;
        const {newConfirmed} = this.props.location.state;
        const {totalConfirmed} = this.props.location.state;
        const {newDeaths} = this.props.location.state;
        const {totalDeaths} = this.props.location.state;
        const {newRecovered} = this.props.location.state;
        const {totalRecovered} = this.props.location.state;
        const {update} = this.props.location.state;


        console.log(this.props.location.state)
        
        this.setState({selectionTitle:title , slugTitle:slug, newConfirmed,totalConfirmed,newDeaths,totalDeaths,newRecovered,totalRecovered,update})
    }
    render(){
     const {selectionTitle , slugTitle, newConfirmed,totalConfirmed,newDeaths,totalDeaths,newRecovered,totalRecovered,update, country} = this.state
     console.log(selectionTitle)
     console.log(slugTitle)
    return(
        <div className={styles.container}>
            <h1 >{selectionTitle}</h1>
            <DetailsCard sTitle={selectionTitle} slug={slugTitle}  newConfirmed={newConfirmed} totalConfirmed={totalConfirmed} newDeaths={newDeaths} totalDeaths={totalDeaths} newRecovered={newRecovered} totalRecovered={totalRecovered} update={update} country={country}/>
        </div>
     
        )
    }
}

export default Details;