
export const getCurrentDay = (index) => {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const currentDate = new Date().getDay()
  
      if (index === 0) {
        return diasSemana[currentDate];
      } else if (index === 8) {
        return diasSemana[currentDate + 1];
      } else if (index === 16) {
        return diasSemana[currentDate + 2];
      } else if (index === 24) {
        return diasSemana[currentDate + 3];
      } else if (index === 32) {
        return diasSemana[currentDate + 4];
      } else if (index === 39) {
        return diasSemana[currentDate + 5];
      }
    
  
}
