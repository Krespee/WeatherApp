export const fetchClima = async (ciudad, setDataClima) => {
    const urlBase = `https://api.openweathermap.org/data/2.5/weather`
    const API_KEY = "307c13c87690418530470e6ac192a842";

    try {
        const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
        const data = await response.json()
        setDataClima(data)
        console.log(data);
      } catch (error) {
        console.error("Ocurrio el siguiente problema:", error);
      }
}
