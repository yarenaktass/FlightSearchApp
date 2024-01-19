interface Flight {
    id: number;
    code?:string;
    departureAirport: string;
    arrivalAirport: string;
    departureDate:any;
    returnDate?: any; 
    duration: string;
    price: number;
  }
  
  export default Flight;
  