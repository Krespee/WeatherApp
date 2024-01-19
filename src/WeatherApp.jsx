import React, { useEffect, useState } from 'react'
import { fetchClima } from './helpers/fetchClima.js'
import { getCurrentLocation } from './helpers/getCurrentLocation.js'
import { Cards } from './components/Cards.jsx';


export const WeatherApp = () => {
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

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
    <>

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
      </div>
    <div className='cards-container'>
      {
        dataClima && <Cards dataClima={dataClima}></Cards>
      }
    </div>
      {
        dataClima &&     <div className='weather-details'>
        <ul className='details-ul'>
          <li className='as'>Humidity: {dataClima.list[0].main.humidity}</li>
          <li className='as'>Pressure: {dataClima.list[0].main.pressure}</li>
          <li className='as'>Sea Level: {dataClima.list[0].main.sea_level}</li>
          <li className='as'>Temp Max: {dataClima.list[0].main.temp_max}</li>
          <li className='as'>Temp Min: {dataClima.list[0].main.temp_min}</li>
          <li className='as'>Wind Deg: {dataClima.list[0].wind.deg}</li>
          <li className='as'>Wind Speed: {dataClima.list[0].wind.speed}</li>
        </ul>
      </div>
      }

    </>

  )
}
