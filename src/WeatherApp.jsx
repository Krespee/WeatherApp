import React, { useEffect, useState } from 'react'
import { fetchClima } from './helpers/fetchClima.js'
import { getCurrentLocation } from './helpers/getCurrentLocation.js'


export const WeatherApp = () => {
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const difKelvin = 273.15

  const [ciudad, setCiudad] = useState("")

  const [dataClima, setDataClima] = useState(null)

  const handleChangeCity = (e) =>{
    setCiudad(e.target.value)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (ciudad.length > 0) fetchClima(ciudad, setDataClima)
    console.log(dataClima);
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
{/* "className={dataClima.name == "Buenos Aires" ? "as":"asd"}" */}
      {
        dataClima && (
          <div className='card'>
            <h2 className='city-name'>{dataClima.city.name}</h2>
             <img src={`https://openweathermap.org/img/wn/${dataClima.list[0].weather[0].icon}@2x.png`} alt="" />
            <p className='temp'>{parseInt(dataClima?.list[0]?.main.temp - difKelvin)}°C</p>
            <p>Feels Like: {parseInt(dataClima.list[0].main.feels_like - difKelvin)}°C</p>
             <p>{dataClima.list[0].weather[0]?.description}.</p>
          </div>
        )
      }
    </div>
  )
}
