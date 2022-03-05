import React, { useEffect, useState } from 'react'
import styles from "./Header.module.css";
import axios from "axios";
import Weathercard from './Weathercard';
import BackgroundImage from './BackgroundImage';

const api = {
  key: "7ee28e4b13914f6ebc4224245220103",
}

export default function Header() {

  const [location, setLocation] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");



  useEffect(()=> {
  axios.get(`https://api.weatherapi.com/v1/current.json?key=${api.key}&q=${location}&aqi=no`)
   .then(data => {
    setResponse(data);
    setStatus(data.status);
    console.log(location)
   });
  }, [location]);
  useEffect(()=> {
    axios.get(`https://api.unsplash.com/search/photos?query=${location}&orientation=landscape&client_id=94hWw64zzFaOiFscijkD2w9VFGunkLaOJX_IXyLSyS4`, {
      "Accept-Version": "V1"
    })
    .then(data => setImage(data.data.results[Math.round(Math.random()*10)].urls.regular))
  }, [location])
return (
  <div className={styles.header}>
      <input type="text" onChange={e => setLocation(e.target.value)} className={styles.searchbar} placeholder="Buscar por ciudad..."/>
      { status === 200 && <Weathercard 
          icon={response.data.current.condition.icon}
          country={response.data.location.country} 
          cityName={response.data.location.name} 
          temperature={Math.round(response.data.current.temp_c)} 
          feelsLike={response.data.current.feelslike_c}
          humidity={response.data.current.humidity}
          />
      }
      <BackgroundImage imagesource={image}/>
  </div>
)
}
