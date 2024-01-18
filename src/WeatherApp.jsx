import React, { useEffect, useState } from 'react'
import { fetchClima } from './helpers/fetchClima.js'
import { getCurrentLocation } from './helpers/getCurrentLocation.js'


export const WeatherApp = () => {
  const API_KEY = "307c13c87690418530470e6ac192a842";
  const difKelvin = 273.15

  const [ciudad, setCiudad] = useState("")

  const [dataClima, setDataClima] = useState(null)

  const handleChangeCity = (e) =>{
    setCiudad(e.target.value)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (ciudad.length > 0) fetchClima(ciudad, setDataClima)
  }

  useEffect(() => {
    getCurrentLocation(setDataClima, API_KEY)
  }, [])
  
  return (
    <div className='container'>
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}> 
        <input 
        type="text" 
        value={ciudad}
        onChange={handleChangeCity}
        />
        <button type='submit'>Search</button>
      </form>

      {
        dataClima && (
          <div>
            <h2>{dataClima.name}</h2>
            <p>Temp: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
            <p>Weather: {dataClima.weather[0].description}.</p>
            <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
          </div>
        )
      }
    </div>
  )
}
