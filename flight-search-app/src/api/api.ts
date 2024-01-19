import Flight from "../model/Flight";
import flights from "./flights";

const api = {
    getAllFlights: (): Promise<Flight[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(flights);
        }, 1000); 
      });
    },
  
  };
  
  export default api;