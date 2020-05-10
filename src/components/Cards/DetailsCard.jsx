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
const DetailsCard = ({sTitle:selectionTitle, slug:slugTitle, c19Data:{Countries}}) =>{
    if(!Countries){return('loading...')}
        console.log(Countries)

    var Arr = Countries;
    console.log(Arr)
    console.log("Selection")
    var selection = Arr.find(obj => {
        return obj.Slug === slugTitle
      })

      console.log(selection)

return(
    <div className={styles.container}>
        <div className = {styles.title}>{selectionTitle}</div> 
        <div className={styles.box}>
            <div className={styles.col}>
                <div className={styles.inTitle}>Total Infected</div>
                    <div>
                    <CountUp start={0} end={selection.TotalConfirmed} duration={1} separator="," />
                    </div>
            </div>
            <div className={styles.col}>
                <div className={styles.inTitle}>Total Recovered</div>
                    <div>
                        <CountUp start={0} end={selection.TotalRecovered} duration={1} separator="," />
                    </div>
                </div>
            <div className={styles.col}>
                <div className={styles.inTitle}>Total Deaths</div>
                    <div><CountUp start={0} end={selection.TotalDeaths} duration={1} separator="," /> </div>
                </div>
        </div>
    
    </div>
   
)


}

export default DetailsCard;