export const fetchCurrentLocation = async (lat, lon, API_KEY) => {
    const urlBase = "https://api.openweathermap.org/data/2.5/weather?"

    try {
        const response = await fetch(`${urlBase}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}
