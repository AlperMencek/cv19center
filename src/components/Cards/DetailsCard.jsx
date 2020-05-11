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
const DetailsCard = ({sTitle:selectionTitle, slug:slugTitle, c19Data}) =>{
    console.log(c19Data)
    // if(!Countries){return('loading...')}
    if(!c19Data){return('loading...')}
    var Arr = c19Data;
    var selection = Arr.find(obj => {
        return obj.Slug === slugTitle
      })


return(
    <div className={styles.container}>
        <div className = {styles.title}>{selectionTitle}
        <div className={styles.date}>{new Date(selection.Date).toDateString()}</div></div> 
        <div className={styles.box}>
            <div className={styles.col}>
                <div className={styles.inTitle}>Total Confirmed</div>
                    <div className={styles.values}>
                    <CountUp start={0} end={selection.TotalConfirmed} duration={1} separator="," />
                    </div>
            </div>
            <div className={styles.col}>
                <div className={styles.inTitle}>Total Recovered</div>
                    <div className={styles.values}>
                        <CountUp start={0} end={selection.TotalRecovered} duration={1} separator="," />
                    </div>
                </div>
            <div className={styles.col}>
                <div className={styles.inTitle}>Total Deaths</div>
                    <div className={styles.values}><CountUp start={0} end={selection.TotalDeaths} duration={1} separator="," /> </div>
            </div>
            
        </div>
        <div className={styles.mortality}>  Total Mortality
        <NumberFormat value={(selection.TotalDeaths/selection.TotalConfirmed)*100} displayType={'text'} thousandSeparator={true} prefix ={' '}  decimalScale ={'2'} />%</div>
      
    
    </div>
   
)


}

export default DetailsCard;