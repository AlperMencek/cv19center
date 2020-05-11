import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import styles from './Cards.module.css'
import CountUp from'react-countup';
import cx from 'classnames';
const useStyles = makeStyles({
   bot:{
     paddingBottom: '2em',
    
   }
});

const GlobalCard = ({c19data:{Global , dateTime,Countries}}) => {
  const classes = useStyles();  
  // console.log("The COUNTRIES ARE", Countries)
  if(!Global){return('loading...')}
   
    return(
      <div className={styles.container}>
        <div className={styles.title}>  <h1 >WorldWide</h1>
        <h4 className ={styles.dateheader} > {new Date(dateTime).toDateString()}</h4></div>
        <Grid container spacing={1}justify="center"  >
          <Grid item   component={CardContent} className={cx(styles.card, styles.infected)}>
            <CardContent flexDirection="row" alignContent="flex-start">
              <Typography color="textSecondary" >
                Total Infected 
              </Typography>
              <Typography variant="h5" component="h2" >
                <CountUp start={0} end={Global.TotalConfirmed} duration={1} separator="," />
              </Typography>
              <Typography color="textSecondary"> New Confirmed </Typography>
              <Typography variant="h6" component="h2">
              <CountUp start={0} end={Global.NewConfirmed} duration={1} separator="," />
              </Typography>
            </CardContent>
         
          </Grid>
          <Grid item  component={CardContent} className={cx(styles.card, styles.recovered)}>
            <CardContent >
              <Typography color="textSecondary" >
                Total Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={Global.TotalRecovered} duration={1} separator="," />
              </Typography>
              <Typography color="textSecondary"> New Recovered </Typography>
              <Typography variant="h6" component="h2">
              <CountUp start={0} end={Global.NewRecovered} duration={1} separator="," />
              </Typography>
              <Typography variant="body2" component="p">
              </Typography>
            </CardContent>
          </Grid>
          <Grid item  component={CardContent} className={cx(styles.card, styles.deaths)}>
            <CardContent >
              <Typography color="textSecondary" >
                Total Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={Global.TotalDeaths} duration={1} separator="," />
              </Typography>
              <Typography color="textSecondary"> New Deaths </Typography>
              <Typography variant="h6" component="h2">
              <CountUp start={0} end={Global.NewDeaths} duration={1} separator="," />
              </Typography>
              <Typography variant="body2" component="p">
              </Typography>
            </CardContent>
          </Grid>
          <Typography variant="body2" component="p" className={classes.bot} >
               Global total Mortality :
               <NumberFormat value={(Global.TotalDeaths/Global.TotalConfirmed)*100} displayType={'text'} thousandSeparator={true} prefix ={' '}  decimalScale ={'2'} />%
              </Typography>
          </Grid>
        
      </div>
    )
}

export default GlobalCard;