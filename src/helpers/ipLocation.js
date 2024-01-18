export const ipLocation = async () => {
    
        try {
            console.log("trying IP Location");
          const response = await fetch('https://ipinfo.io/json?token=9d3b076e2eb498');
          const data = await response.json();
      
          const location = data.loc.split(',');
          const lat = location[0];
          const lon = location[1];
      
          return {lat, lon}
        } catch (error) {
          return undefined
        }
}
