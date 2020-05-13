import React, { useState, useEffect } from 'react';
import { fetchc19DailyConfirmedData, fetchc19DailyDeathsData, fetchc19DailyRecoveredData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './SChart.module.css';
const SelectionChart = ({ slug: slugTitle, sTitle:selectionTitle}) => {

    const [dailyData, setDailyData] = useState([]);
    const [dailyDeathsData, setDailyDeathsData] = useState([]);
    const [dailyRecoveredData, setDailyRecoveredData] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
           
            setDailyData(await fetchc19DailyConfirmedData(slugTitle));
            setDailyDeathsData(await fetchc19DailyDeathsData(slugTitle));
            setDailyRecoveredData(await fetchc19DailyRecoveredData(slugTitle));

        }
        fetchAPI();
    }, []);
    if(!dailyData.length){ return(" Please Select another location")}
    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [
                    {
                        data: dailyData.map(({ Cases }) => Cases),
                        label: "Confirmed",
                        borderColor: 'rgb(255, 255, 255)',
                        fill: true,
                        backgroundColor: 'rgb(255, 255, 255,.2)',
                    }, {
                        data: dailyDeathsData.map(({Cases})=>Cases),
                        label: "Deaths",
                        borderColor: 'rgb(218, 5, 86)',
                        backgroundColor:'rgb(218, 5, 86,.7)' ,
                        fill: true
                    }, {
                        data: dailyRecoveredData.map(({Cases})=>Cases),
                        label: "Recovered",
                        borderColor: 'rgb(51, 255, 175  )',
                        backgroundColor:'rgb(51, 255, 175 ,.5)' ,
                        fill: true
                    }
                ],
            }} options={{
                responsive: true,
                maintainAspectRatio: false,
                title: { text: selectionTitle, display: true, fontColor: 'white', fontSize: 30, },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'white',
                                maxTicksLimit: 10,
                                fontSize: 13,
                            },
                            gridLines: {

                            },

                        }
                    ],
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'white',
                                fontSize: 11,
                            },
                            gridLines: {

                            },
                        }
                    ]
                },

                legend: {

                    labels: {
                        fontColor: 'white'
                    }
                }
            }} />) : null
    )
    console.log(dailyData);

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default SelectionChart;