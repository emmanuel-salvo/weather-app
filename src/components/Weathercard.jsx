import React from 'react'
import styles from "./Weathercard.module.css"


export default function Weathercard({temperature, feelsLike, humidity, icon, cityName, country}) {
  return (
    <div className={styles.weathercard}>
        <p className={styles.city}>{cityName}</p>
        <p className={styles.country}>{country}</p>
        <h1 className={styles.temperature}>{temperature}°C</h1>
        <img src={icon} alt="" className={styles.weathericon} />
        <p className={styles.feelslike}>Sensación térmica: {feelsLike}°C</p>
        <p className={styles.humidity}>Humedad: {humidity}%</p>
    </div>
  )
}
