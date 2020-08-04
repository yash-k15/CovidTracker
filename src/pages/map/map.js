import React, {useEffect, useState} from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import CountUp from 'react-countup';
import styles from './map.module.css';

function Map() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const countriesLocations = results.map((data, i) => {
    return (
      <div
          lat={data.countryInfo.lat}
          lng={data.countryInfo.long}
          style={{
            color: "black",
            backgroundColor: "#FFF",
            height: "25px",
            width: "45px",
            textAlign: "center",
            borderRadius : "30%",
          }}
        > 
          <img height="10px" src={data.countryInfo.flag} />
          <br />
          <CountUp
            start = {0}
            end={data.active}
            duration={2}
            separator=","
          />
      </div>
    );
  });

  return (
    <div className = {styles.contain}>
      <br />
      <p>The below map represents the total number of Active cases for each country</p>
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBhu7OxqEYX83CzrcZZwq7_qnXxoBh7jao" }}
          defaultCenter={{ lat: 51.5074, lng: 0.1278 }}
          defaultZoom={4}
        >
          {countriesLocations} 
        </GoogleMapReact>
      </div>
    </div>
  );

}

export default Map;