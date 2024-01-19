import ReactDOM from 'react-dom/client';
import App from './App';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import { store } from './store/ConfigureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
       <Provider store ={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
       <App/>
      </LocalizationProvider>
      <ToastContainer position="bottom-right" />
      </Provider>
);
