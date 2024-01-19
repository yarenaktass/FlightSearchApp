import { useRef, useState } from "react";
import { Form, Field, Formik, FormikProps } from "formik";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as yup from "yup";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import airportData from "../api/airportData";
import { toast } from "react-toastify";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

interface FlightSearchProps {
  onSearch: (searchParams: any) => void;
}
const validationSchema = yup.object({
  departureAirport: yup.string().required("Departure Airport is required"),
  arrivalAirport: yup.string().required("Arrival Airport is required"),
  departureDate: yup
    .date()
    .required("Departure Date is required")
    .min(new Date(), "Departure Date cannot be in the past"),
  oneWay: yup.boolean(),
});


export default function FlightSearch({ onSearch }: FlightSearchProps) {
  const formRef = useRef<FormikProps<any> | null>(null);
  const [disableReturnDate, setDisableReturnDate] = useState(false);

  const [flightSearch, setFlightSearch] = useState({
    departureAirport: "",
    arrivalAirport: "",
    departureDate: null,
    returnDate: null,
    oneWay: false,
  });
 
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setFlightSearch((prevFlightSearch) => ({
      ...prevFlightSearch,
      oneWay: checked,
      returnDate: checked ? null : prevFlightSearch.returnDate,  
    }));
    setDisableReturnDate(checked);
    if (formRef.current) {
      formRef.current.setFieldValue("oneWay", checked);
      formRef.current.setFieldValue("returnDate", checked ? null : formRef.current.values.returnDate);  
    }
  };

  const handleSubmit = async (values: any) => {
    console.log("handleSubmit is called with values:", values);

    if (!values.oneWay && !values.returnDate) {
      toast.error("Return Date is required", { autoClose: 2000 });
      return;
    }
    onSearch(values);
  };

  return (
    <>
       <Card sx={{ border: "2px solid #ae7d8d" }}>
        <CardContent sx={{ borderBottom: "2px solid #ae7d8d" }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
          <span>Plane Ticket</span>
          <AirplaneTicketIcon sx={{ marginLeft: 1, fontSize:'30px' }} />
          </Typography>
          <Formik
            initialValues={flightSearch}
            enableReinitialize={false}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            innerRef={formRef}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={airportData}
                    getOptionLabel={(option) => option.name || option.code}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="dense"
                        name="departureAirport"
                        label="Departure Airport"
                        size="small"
                        fullWidth
                      />
                    )}
                    onChange={(_, value) => {
                      formRef.current?.setFieldValue(
                        "departureAirport",
                        value?.name || "" 
                      );
                    }}
                  />

                  <div style={{ color: "red" }}>
                    <ErrorMessage name="departureAirport" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    options={airportData}
                    getOptionLabel={(option) => option.name || option.code}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        margin="dense"
                        name="arrivalAirport"
                        label="Arrival Airport"
                        size="small"
                        fullWidth
                      />
                    )}
                    onChange={(_, value) => {
                      formRef.current?.setFieldValue(
                        "arrivalAirport",
                        value?.name || ""
                      );
                    }}
                  />
                  <div style={{ color: "red" }}>
                    <ErrorMessage name="arrivalAirport" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Field name="departureDate">
                      {({ field, form }: { field: any; form: any }) => (
                        <DatePicker
                          {...field}
                          label="Departure Date"
                          value={field.value}
                          onChange={(value) =>
                            form.setFieldValue(field.name, value)
                          }
                          textField={(params: any) => <TextField {...params} />}
                        />
                      )}
                    </Field>
                  </LocalizationProvider>
                  <div style={{ color: "red" }}>
                    <ErrorMessage name="departureDate" component="div" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Field name="returnDate">
                      {({ field, form }: { field: any; form: any }) => (
                        <DatePicker
                          {...field}
                          margin="dense"
                          label="Return Date"
                          size="small"
                          fullWidth
                          onChange={(value) =>
                            form.setFieldValue(field.name, value)
                          }
                          textField={(params: any) => <TextField {...params} />}
                          disabled={disableReturnDate}
                        />
                      )}
                    </Field>
                  </LocalizationProvider>
                  <div style={{ color: "red" }}>
                    {disableReturnDate ? null : (
                      <ErrorMessage name="returnDate" component="div" />
                    )}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Checkbox
                    checked={flightSearch.oneWay}
                    onChange={handleCheckboxChange}
                    color="primary"
                  />

                  <label>One Way</label>
                </Grid>
              </Grid>

              <Button
                type="submit"
                onClick={() => formRef.current?.submitForm()}
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "pink",
                  display: "flex",
                  marginTop: 2,
                }}
              >
                Search
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </>
  );
}