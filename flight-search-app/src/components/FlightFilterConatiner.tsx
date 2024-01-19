import { useEffect, useState } from "react";
import FlightSearch from "./FlightSearch";
import FlightList from "./FlightList";
import FilterOptions from "./FilterOptions";
import Loading from "./Loading";
import Flight from "../model/Flight";
import { fetchFlights, flightSelectors } from "../store/flightSlice";
import { parseDuration } from "../model/util";
import { useAppDispatch, useAppSelector } from "../store/ConfigureStore";

const FlightFilterContainer = () => {
  const dispatch = useAppDispatch();
  const flights = useAppSelector(flightSelectors.selectAll);
  const { flightsLoaded } = useAppSelector((state) => state.flights);
  const [loading, setLoading] = useState<boolean>(false);
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);
  const [filteredFlights, setFilteredFlights] = useState(flights);

  useEffect(() => {
    if (!flightsLoaded) dispatch(fetchFlights());
  }, [flightsLoaded, dispatch]);

  const sortFlights = (data: Flight[], filterType: string) => {
    switch (filterType) {
      case "Price":
        return [...data.sort((a, b) => a.price - b.price)];
      case "Duration":
        return [
          ...data.sort((a, b) => {
            const durationA = parseDuration(a.duration);
            const durationB = parseDuration(b.duration);

            if (durationA.hours === durationB.hours) {
              return durationA.minutes - durationB.minutes;
            }

            return durationA.hours - durationB.hours;
          }),
        ];
      case "Departure Time":
        return [
          ...data.sort(
            (a, b) =>
              new Date(a.departureDate).getHours() * 60 +
              new Date(a.departureDate).getMinutes() -
              (new Date(b.departureDate).getHours() * 60 +
                new Date(b.departureDate).getMinutes())
          ),
        ];
      case "Return Time":
        return [
          ...data.sort(
            (a, b) =>
              new Date(a.returnDate).getHours() * 60 +
              new Date(a.returnDate).getMinutes() -
              (new Date(b.returnDate).getHours() * 60 +
                new Date(b.returnDate).getMinutes())
          ),
        ];
      default:
        return data;
    }
  };

  const handleFilter = (filterType: string) => {
    const sortedFlights = sortFlights(filteredFlights, filterType);
    setFilteredFlights(sortedFlights);
  };

  const handleSearch = async (searchParams: any) => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    dispatch(fetchFlights());

    const { departureAirport, arrivalAirport } = searchParams;
    const filtered = flights.filter(
      (flight) =>
        flight.departureAirport
          .toLowerCase()
          .includes(departureAirport.toLowerCase()) &&
        flight.arrivalAirport
          .toLowerCase()
          .includes(arrivalAirport.toLowerCase())
    );

    const sortedFiltered = sortFlights(filtered, "Price");
    setFilteredFlights(sortedFiltered);

    setLoading(false);
    setShowFilterOptions(true);
  };

  return (
    <>
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        <>
          <div style={{ marginBottom: "30px" }}>
            <FlightSearch onSearch={handleSearch} />
          </div>
          <FilterOptions onFilter={handleFilter} show={showFilterOptions} />
          <FlightList filteredFlights={filteredFlights} />
        </>
      )}
    </>
  );
};
export default FlightFilterContainer;
