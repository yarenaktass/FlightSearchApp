import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

interface Props{
    message?:string;
}

export default function Loading({message='Loading...'}:Props){
    
     return(
        <Backdrop open={true} invisible={true}>
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
          <Typography>
          <CircularProgress size={70} color='error'/>
          </Typography>
            <Typography variant='h4' sx={{ justifyContent: 'center',fontSize: '1rem', position: 'fixed', top: '60%', color: 'inherit' }}>
            <ConnectingAirportsIcon fontSize='large' color='error'/>
            {message}
            <ConnectingAirportsIcon fontSize='large' color='error'/>
            </Typography>
        </Box>
    </Backdrop>
     )
}