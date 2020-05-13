import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import styles from './Standings.module.css'
import CountUp from'react-countup';
import cx from 'classnames';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Details from '../../routes/Details';

const useStyles = makeStyles({
   bot:{
     paddingBottom: '2em',
    
   }
});

const Standings= ({c19data:{Global , dateTime,Countries}}) => {
  const classes = useStyles();  
    if(!Countries) return ('loading...')
  var allCountries = Countries;
    //Sort the countries in order to get the top Total confirmed cases.
    if(allCountries){
        allCountries.sort( function(a,b){
      return b.TotalConfirmed- a.TotalConfirmed;
    })
}
  if(!Global){return('loading...')}
   let Country1 = allCountries[0];
   if(allCountries.length != 0){
    return(
    
    <div class="container" >

        <div className = {styles.topTitle}>Top Countries</div> 
        
         <Link style={{ textDecoration: 'none' }} to={{ 
             pathname:'/details',
             state:{
                 title: allCountries[0].Country,
                 slug: allCountries[0].Slug,
                 all: allCountries,
                }

        }} > 
        <div className="row justify-content-center">
            <div className="col-lg"   className = {styles.container}>
                <div className = {styles.numOne} >#1</div>
                <div className = {styles.widthCol}>
                    <div className ={styles.title} >
                        {allCountries[0].Country}
                    </div>
                    </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Confirmed:</div>
                    <div  className = {styles.countVal} > <CountUp start={0} end={allCountries[0].TotalConfirmed} duration={1.5} separator="," /></div>
                </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Deaths:</div>
                    <div className = {styles.countVal}><CountUp start={0} end={allCountries[0].TotalDeaths} duration={1.5} separator="," /></div>
                </div>
            </div>
        </div>
         </Link> 
        {/* second place */}
        <Link style={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }} to={{ 
             pathname:'/details',
             state:{
                 title: allCountries[1].Country,
                 slug: allCountries[1].Slug,
                 all:allCountries,
                }

        }}> 
        <div className="row justify-content-center">
            <div className="col-lg" className = {styles.container}>
                <div className = {styles.numTwo} >#2</div>
                <div className = {styles.widthCol}>
                    <div className ={styles.title} >
                        {allCountries[1].Country}
                    </div>
                    </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Confirmed:</div>
                    <div  className = {styles.countVal} > <CountUp start={0} end={allCountries[1].TotalConfirmed} duration={1.5} separator="," /></div>
                </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Deaths:</div>
                    <div className = {styles.countVal}><CountUp start={0} end={allCountries[1].TotalDeaths} duration={1.5} separator="," /></div>
                </div>
            </div>
        </div>
        </Link>
        {/* third place */}
        <Link style={{ textDecoration: 'none' }} to={{ 
             pathname:'/details',
             
             state:{
                 title: allCountries[2].Country,
                 slug: allCountries[2].Slug,
                 all:allCountries,
                }

        }}> 
        <div className="row justify-content-center">
            <div className="col-lg" className = {styles.container}>
                <div className = {styles.numThree} >#3</div>
                <div className = {styles.widthCol}>
                    <div className ={styles.title} >
                        {allCountries[2].Country}
                    </div>
                    </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Confirmed:</div>
                    <div  className = {styles.countVal} > <CountUp start={0} end={allCountries[2].TotalConfirmed} duration={1.5} separator="," /></div>
                </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Deaths:</div>
                    <div className = {styles.countVal}><CountUp start={0} end={allCountries[2].TotalDeaths} duration={1.5} separator="," /></div>
                </div>
            </div>
        </div>
        </Link>
        {/* Fourth Place */}
        <Link style={{ textDecoration: 'none' }} to={{ 
             pathname:'/details',
             state:{
                 title: allCountries[3].Country,
                 slug: allCountries[3].Slug,
                 all:allCountries,
                }

        }}> 
        <div className="row justify-content-center">
            <div className="col-lg" className = {styles.container}>
                <div className = {styles.numbers} >#4</div>
                <div className = {styles.widthCol}>
                    <div className ={styles.title} >
                        {allCountries[3].Country}
                    </div>
                    </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Confirmed:</div>
                    <div  className = {styles.countVal} > <CountUp start={0} end={allCountries[3].TotalConfirmed} duration={1.5} separator="," /></div>
                </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Deaths:</div>
                    <div className = {styles.countVal}><CountUp start={0} end={allCountries[3].TotalDeaths} duration={1.5} separator="," /></div>
                </div>
            </div>
        </div>
        </Link>
         {/* Fifth Place */}
         <Link style={{ textDecoration: 'none' }} to={{ 
             pathname:'/details',
             state:{
                 title: allCountries[4].Country,
                 slug: allCountries[4].Slug,
                 all:allCountries,
                }

        }}> 
         <div class="row justify-content-center">
            <div class="col-lg" className = {styles.container}>
                <div className = {styles.numbers} >#5</div>
                <div className = {styles.widthCol}>
                    <div className ={styles.title} >
                        {allCountries[4].Country}
                    </div>
                    </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Confirmed:</div>
                    <div  className = {styles.countVal} > <CountUp start={0} end={allCountries[4].TotalConfirmed} duration={1.5} separator="," /></div>
                </div>
                <div className = {styles.widthCol}>
                    <div className = {styles.subTitle}>Total Deaths:</div>
                    <div className = {styles.countVal}><CountUp start={0} end={allCountries[4].TotalDeaths} duration={1.5} separator="," /></div>
                </div>
            </div>
        </div>
        </Link>
    </div>
    
  
    
    )
   }
}

export default Standings;