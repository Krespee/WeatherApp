import { getCurrentDay } from "../helpers/getCurrentDay";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
export const Cards = ({dataClima}) => {
  const difKelvin = 273.15

  const getClassBasedOnWeather = (weather) =>{
    if (weather === "Clouds") {
      return "card cloudy";
    } else if (weather === "Rain") {
      return "card rainy";
    } else if (weather === "Clear") {
      return "card sunny";
    } else {
      return "default";
    }
  }





  const createCard = (dataClima, index) =>{

    return (
    <>  
      <div className={getClassBasedOnWeather(dataClima.list[index].weather[0].main)}>
        <h2>{getCurrentDay(index)}</h2>
        <h2 className='city-name'>{dataClima.city.name}</h2>
        <img src={getWeatherIcon(dataClima.list[index].weather[0].main)} alt="" />
        <p className='temp'>{parseInt(dataClima?.list[index]?.main.temp - difKelvin)}°C</p>
        <p>Feels Like: {parseInt(dataClima.list[index].main.feels_like - difKelvin)}°C</p>
        <p>{dataClima.list[index].weather[0]?.description}.</p>
      </div>

    </>
    )
  }



  return (
    <>
      {[0, 8, 16, 24, 32, 39].map((index) => (
        <div key={index}>
          {createCard(dataClima, index)}
        </div>
      ))}
    </>
  )
}
