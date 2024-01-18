import React, { useState } from 'react'


export const WheatherApp = () => {
  
  const urlBase = `https://api.openweathermap.org/data/2.5/weather`
  const API_KEY = "307c13c87690418530470e6ac192a842";
  
  const [ciudad, setCiudad] = useState("")

  const [dataClima, setDataClima] = useState(null)

  const handleChangeCity = (e) =>{
    setCiudad(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (ciudad.length > 0) fetchClima()
  }

  const fetchClima = async () =>{
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
      const data = await response.json()
      setDataClima(data)
      console.log(data);
    } catch (error) {
      console.error("Ocurrio el siguiente problema:", error);
    }
  }

  return (
    <div className='container'>
      <h1>Wheather App</h1>

      <form onSubmit={handleSubmit}> 
        <input 
        type="text" 
        value={ciudad}
        onChange={handleChangeCity}
        />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  )
}
