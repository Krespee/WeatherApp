export const getWeatherIcon = (weather) => {
    const currentHour = new Date().getHours()

      if (currentHour > 19 && currentHour <6) {
        if (weather === "Clouds") {
          return "./src/assets/img/cloudy-night-1.svg";
        } else if (weather === "Rain") {
          return "./src/assets/img/rainy-6.svg";
        } else if (weather === "Clear") {
          return "./src/assets/img/night.svg";
        }
        
      }else{
        if (weather === "Clouds") {
          return "./src/assets/img/cloudy.svg";
        } else if (weather === "Rain") {
          return "./src/assets/img/rainy-6.svg";
        } else if (weather === "Clear") {
          return "./src/assets/img/day.svg";
        }
      }
    
}
