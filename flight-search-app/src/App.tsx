import FlightFilterContainer from './components/FlightFilterConatiner';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';



const App = () => {
 
  return (
    <>
       <div>
        <AppBar position="static" sx={{ backgroundColor: "#e1779b", mb: 4 }}>
          <Toolbar>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Typography variant="h4">SkyVoyage Booking</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <FlightFilterContainer />

    </>
  );

}

export default App;
