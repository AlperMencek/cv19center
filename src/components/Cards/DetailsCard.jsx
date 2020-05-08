import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import styles from './detailCard.module.css'
import CountUp from'react-countup';
import cx from 'classnames';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

//Get the value from Details
const DetailsCard = ({sTitle:selectionTitle, slug:slugTitle, newConfirmed,totalConfirmed,newDeaths,totalDeaths,newRecovered,totalRecovered,update, country}) =>{
    console.log(selectionTitle)
    console.log()
return(
    <div className={styles.container}>
        <div className = {styles.title}>{selectionTitle}</div> 
        <div className={styles.box}>
            <div className={styles.col}>
                <h6>Total Infected</h6>
                <CountUp start={0} end={totalConfirmed} duration={1} separator="," />
            </div>
            <div className={styles.col}>
                <h6>Total Recovered</h6>
                <CountUp start={0} end={totalRecovered} duration={1} separator="," />
            </div>
            <div className={styles.col}>
                <h6>Total Deaths</h6>
                <CountUp start={0} end={totalDeaths} duration={1} separator="," />
            </div>
        </div>
    
    </div>
   
)


}

export default DetailsCard;