import React, { useState, useEffect } from 'react';
import { fetchc19DailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
const SelectionChart = ({ slug: slugTitle }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        console.log(slugTitle)
        const fetchAPI = async () => {
            console.log("within fetchAPI")
            setDailyData(await fetchc19DailyData(slugTitle));
        }
        fetchAPI();
    }, [slugTitle]);

    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map(({ Confirmed }) => Confirmed),
                        label: "Confirmed",
                        borderColor: 'rgb(255, 255, 255)',
                        fill: true,
                        backgroundColor: 'rgb(255, 255, 255,.2)',
                    },
                    {
                        data: dailyData.map(({ Deaths }) => Deaths),
                        label: "Deaths",
                        borderColor: 'rgb(218, 5, 86)',
                        backgroundColor: 'rgb(218, 5, 86,.7)',
                        fill: true
                    }],
            }} options={{
                responsive: true,
                maintainAspectRatio: false,
                title: { text: "World Data", display: true, fontColor: 'white', fontSize: 30, },
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