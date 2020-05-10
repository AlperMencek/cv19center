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
import {fetchData , fetchSumData} from '../api';


import {Cards, GlobalCard, Charts, SearchBar, Standings} from '../components';

class Details extends React.Component{
    state = {
        selectionTitle: '', 
        slugTitle: '',
        c19Data:{},
        
    }
    async componentDidMount(){
        const {handle} = this.props.match.params;
        const {title} = this.props.location.state;
        const {slug} = this.props.location.state;
        
        const fetchRes = await fetchSumData();   
        
        
        this.setState({selectionTitle:title , slugTitle:slug , c19Data: fetchRes})
    }
    render(){
     const {selectionTitle , slugTitle, c19Data} = this.state
  
    return(
        <div className={styles.container}>
            <DetailsCard sTitle={selectionTitle} slug={slugTitle} c19Data={c19Data} />
        </div>
     
        )
    }
}

export default Details;