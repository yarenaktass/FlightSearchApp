import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { formatDate } from "../model/util";
import { useEffect } from "react";
import { fetchFlights } from "../store/flightSlice";
import { useAppDispatch, useAppSelector } from "../store/ConfigureStore";
import Loading from "./Loading";
import Flight from "../model/Flight";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

interface FlightListProps {
  filteredFlights:Flight[];
}

const FlightList = ({ filteredFlights }: FlightListProps) => {
  const dispatch = useAppDispatch();
  const { flightsLoaded, status } = useAppSelector((state) => state.flights);

  useEffect(() => {
    if (!flightsLoaded) dispatch(fetchFlights());
  }, [flightsLoaded, dispatch]);

  if (status === "pendingFetchFlights") {
    return <Loading message="Loading..." />;
  }

  return (
    <>

      {filteredFlights.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "100px",
                  }}
                >
                  Code
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "150px",
                  }}
                >
                  Departure Airport
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "150px",
                  }}
                >
                  Arrival Airport
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "150px",
                  }}
                >
                  Departure Date
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "150px",
                  }}
                >
                  Return Date
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "100px",
                  }}
                >
                  Duration
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    color: "#e91e63",
                    width: "100px",
                  }}
                >
                  Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFlights.map((flight) => (
                <TableRow key={flight.id}>
                  <TableCell>{flight.code}</TableCell>
                  <TableCell>{flight.departureAirport}</TableCell>
                  <TableCell>{flight.arrivalAirport}</TableCell>
                  <TableCell>{formatDate(flight.departureDate)}</TableCell>
                  <TableCell>{formatDate(flight.returnDate)}</TableCell>
                  <TableCell>{flight.duration}</TableCell>
                  <TableCell>{flight.price}₺</TableCell>
                  <TableCell>
                    <Button sx={{ color: "#6497d3" }}>
                      BUY
                      <FlightTakeoffIcon sx={{ color: "#6497d3" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default FlightList;
