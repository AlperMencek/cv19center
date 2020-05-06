import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import styles from './Standings.module.css'
import CountUp from'react-countup';
import cx from 'classnames';
const useStyles = makeStyles({
   bot:{
     paddingBottom: '2em',
    
   }
});

const Standings= ({c19data:{Global , dateTime,Countries}}) => {
  const classes = useStyles();  
  var allCountries = Countries;
    //Sort the countries in order to get the top Total confirmed cases.
    if(allCountries){
        allCountries.sort( function(a,b){
      return b.TotalConfirmed- a.TotalConfirmed;
    })
}
  if(!Global){return('loading...')}
   
    return(
    <div>
        {allCountries[0].Country}
    </div>
    )
}

export default Standings;