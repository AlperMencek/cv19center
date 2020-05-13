import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import styles from './detailCard.module.css'
import CountUp from 'react-countup';

const useStyles = makeStyles({
  bot: {
    paddingBottom: '2em',

  }
});

const GlobalCard = ({ c19data: { Global, dateTime, Countries } }) => {
  const classes = useStyles();
  if (!Global) {
    return ('loading...', window.location.reload()
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>World Wide
        <div className={styles.date}>{new Date(dateTime).toDateString()}</div></div>
      <div className={styles.box}>
        <div className={styles.col}>
          <div className={styles.inTitle}>Total Confirmed</div>
          <div className={styles.values}>
            <CountUp start={0} end={Global.TotalConfirmed} duration={1} separator="," />
          </div>
          <div className={styles.secondaryTitle}>New Confirmed</div>
          <div className={styles.valuesSecondary}>
            <CountUp start={0} end={Global.NewConfirmed} duration={1} separator="," />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.inTitle}>Total Recovered</div>
          <div className={styles.values}>
            <CountUp start={0} end={Global.TotalRecovered} duration={1} separator="," />
          </div>
          <div className={styles.secondaryTitle}>New Recovered</div>
          <div className={styles.valuesSecondary}>
            <CountUp start={0} end={Global.NewRecovered} duration={1} separator="," />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.inTitle}>Total Deaths</div>
          <div className={styles.values}><CountUp start={0} end={Global.TotalDeaths} duration={1} separator="," /> </div>
          <div className={styles.secondaryTitle}>New Deaths</div>
          <div className={styles.valuesSecondary}>
            <CountUp start={0} end={Global.NewDeaths} duration={1} separator="," />
          </div>
        </div>
      </div>
      <div className={styles.mortality}>  Total Mortality
      <NumberFormat value={(Global.TotalDeaths / Global.TotalConfirmed) * 100} displayType={'text'} thousandSeparator={true} prefix={' '} decimalScale={'2'} />%</div>


    </div>
  )
}

export default GlobalCard;