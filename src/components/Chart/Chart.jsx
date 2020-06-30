import React, { useState, useEffect } from 'react';
import styles from './Chart.module.css';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
                        // because we destructure data as {data: {confirmed,recovered,deaths}  so no further need data.confirmed just write confirmed in this function
const Chart = ({data: {confirmed,recovered,deaths}, country}) => {                  // {data, country} represent country data for Chart
    const [dailyData, setDailyData] = useState([]);     // {} is initial value known as empty object  Its wrong better is to put [] empty array    dailyData is for Chart golbalData

    useEffect(() => {                       // async can't work on top of useEffect , We will Put it inside
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();                     // Self Calling Function
    }, []);                 // Problem Was values Keep coming not stop so [] meant to hold on value until complete

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

    const barChart = (
        confirmed                       // data.confirmed replaced with confirmed
        ? (
            <Bar
            data={{     // First {} for making code dynamic  Second {} for creating an object
                labels : ['Infected', 'Recovered', 'Deaths'],
                datasets : [{
                    label: 'People',
                    backgroundColor: [              // This is Array and colors are being selected index wise
                        'rgba(0, 0, 225, 0.5)',
                        'rgba(0, 225, 0, 0.5)',
                        `rgba(225, 0, 0, 0.5)`,
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]   // Data was not Showing on Chart as confirmed, recovered, deaths does not gives values
                }]
            }}  
            options={{
                legend:{display : false},         //because we dont want legend to appear
                title: { display: true, text: `Current State in ${country}`}
            }}       
            
            /> 
        ) : null
    );

    return (
        <div className={styles.container}>
             {country? barChart : lineChart}                                    {/* {lineChart} Replaced now if country avaiable show barChart otherwise show lineChart*/}
        </div>
    )
}
export default Chart;