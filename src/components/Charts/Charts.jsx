import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar} from 'react-chartjs-2';
import styles from './Charts.module.css';
const Charts = () => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(()=> {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
       // console.log(dailyData);
        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length?(<Line
        data={{
        labels: dailyData.map(({date})=>date),
        datasets:[
            {
            data: dailyData.map(({confirmed})=>confirmed),
            label: "Confirmed",
            borderColor: 'rgb(255, 255, 255)',
            fill: true,
            backgroundColor:'rgb(255, 255, 255,.2)',
        }, 
        {
            data: dailyData.map(({deaths})=>deaths),
            label: "Deaths",
            borderColor: 'rgb(218, 5, 86)',
            backgroundColor:'rgb(218, 5, 86,.7)' ,
            fill: true
        }],
        }} options = {{
            responsive:true, 
            maintainAspectRatio: false,
            title:{text:"World Data",display:true, fontColor:'white',fontSize: 30, },
            scales:{
                yAxes:[
                    {
                        ticks:{
                                fontColor: 'white',
                                maxTicksLimit:10,
                                fontSize: 13,
                        },
                       gridLines:{
                           
                       },
                       
                }
            ],
        xAxes:[
            {
                ticks:{
                    fontColor: 'white',
                    fontSize: 11,
            },
           gridLines:{
               
           },   
            }
        ]},  
            
            legend:{
                
                labels:{
                    fontColor:'white'
                }
            }
        }} />) : null
    )
    
    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts;