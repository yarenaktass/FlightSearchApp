import { createSlice, createAsyncThunk, createEntityAdapter, EntityState } from '@reduxjs/toolkit';
import Flight from '../model/Flight';
import api from '../api/api';
import { RootState } from './ConfigureStore';

const flightAdapter = createEntityAdapter<Flight>();

interface FlightState extends EntityState<Flight, any> {
  status: string;
  flightsLoaded: boolean;
}

const initialState: FlightState = flightAdapter.getInitialState({
  status: 'idle',
  flightsLoaded: false,
});

export const fetchFlights = createAsyncThunk<Flight[]>(
  'flights/fetchFlights',
  async () => {
    try {
      const flights = await api.getAllFlights();
      return flights;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setFlights: flightAdapter.setAll,

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = 'pendingFetchFlights';
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        flightAdapter.setAll(state, action.payload);
        state.status = 'idle';
        state.flightsLoaded = true;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = 'idle';
        console.log('Error:', action.error.message);
      });
  },
});

export const { setFlights } = flightSlice.actions;
export const flightSelectors = flightAdapter.getSelectors<RootState>((state) => state.flights);

export default flightSlice.reducer;
