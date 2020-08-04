import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css';

const Chart = ({data : {confirmed,recovered,deaths}, country}) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() =>{
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        
        
        fetchAPI();
    },[]);



    const lineChart = (
        dailyData.length
        ?(
        <Line
        data={{
            labels: dailyData.map(({date}) => new Date(date).toDateString()),
            datasets: [{
                data : dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },{
                data : dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(55,0,0,0.5)',
                fill: true,
            }],
        }} options={{
            responsive: true,
            scales: {
                xAxes: [{
                  gridLines: {
                    display : false,
                  },
                  ticks: {
                    maxTicksLimit: 17
                }
                }],
                yAxes: [{
                  gridLines: {
                    color: "black",
                    borderDash: [5, 5],
                  }
                }]
              }
        }}
        />) :null
        );

        const barChart = (
            confirmed
            ? (
                < Bar 
                    data={{
                        labels : ['Infected', 'Recovered', 'Active','Deaths'],
                        datasets : [{
                            label : 'People',
                            backgroundColor : [
                                'rgba(0,0,255,0.5)',
                                'rgba(0,255,0,0.5)',
                                'rgba(255, 251, 0,0.5)',
                                'rgba(255,0,0,0.5)',
                            ],
                            data:[confirmed.value, recovered.value, (confirmed.value - recovered.value - deaths.value) ,deaths.value] 
                        }]
                    }}
                    options={{
                        legend : {display : false},
                        title : {display : true, text : `Current state in ${country}`},
                    }}
                />
            ) : null
        );

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;