import React, { useState, useEffect } from 'react';
import styles from './Chart.module.css';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);     // {} is initial value known as empty object  Its wrong better is to put [] empty array

    useEffect(() => {                       // async can't work on top of useEffect , We will Put it inside
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();                     // Self Calling Function
    });

    const lineChart = (                    // Line for global view & Bar for country Wise view * to make this work nned to import line chart from react chart API
        dailyData.length                          // dailyData[0] replaced
            ? (
                <Line
                    data={{                   // In data there is Object Which Takes Multiple datasets
                        labels: dailyData.map(({ date }) => date),     // Destructure And Simplly Return
                        datasets: [{                          // Data set are two because API does not provide daily recovered
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,                           // Fill the space Below Chart
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),  //.map it is not a function
                            label: 'deaths',
                            borderColor: 'red',
                            background_color: 'rgba(225, 0, 0, 0.5)',
                            fill: true,
                        }],
                    }}

                />) : null
    );
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
export default Chart;