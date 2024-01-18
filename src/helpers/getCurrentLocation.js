import { fetchCurrentLocation } from "./fetchCurrentLocation";
import { ipLocation } from "./ipLocation";
import { navigatorLocation } from "./navigatorLocation";

export const getCurrentLocation = async (setDataClima, API_KEY) => {
    const handleLocation = await navigatorLocation()  
    if (handleLocation === undefined) {
        const {lat, lon} = await ipLocation();
        setDataClima(await fetchCurrentLocation(lat, lon, API_KEY))
    }else{
        const {lat, lon} = navigatorLocation();
        setDataClima(await fetchCurrentLocation(lat, lon, API_KEY))
    }
      
}
