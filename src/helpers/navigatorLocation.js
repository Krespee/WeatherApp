export const navigatorLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              console.log(lat, lon);
              resolve({ lat, lon });
            },
            (error) => {
              console.error("Error al obtener la ubicación:", error.message);
              resolve(undefined);
            }
          );
        } else {
          console.error("Geolocalización no soportada por este navegador");
          resolve (undefined);
        }
      });
}