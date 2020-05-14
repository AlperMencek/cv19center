import React from 'react';
import NumberFormat from 'react-number-format';
import styles from './detailStats.module.css'
import CountUp from'react-countup';

//Get the value from Details
const DetailsCard = ({sTitle:selectionTitle, slug:slugTitle, c19Data}) =>{
    if(!c19Data){return('loading... c19Data')}
    var Arr = c19Data;
    var selection = Arr.find(obj => {
        return obj.Slug === slugTitle
      })
    if(!selection){return('No Data for '+selectionTitle)}

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