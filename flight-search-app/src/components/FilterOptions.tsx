import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface FilterOptionsProps {
  onFilter: (filterType: string) => void;
  show: boolean;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilter, show }) => {
  const [filterType, setFilterType] = useState<string | null>(null);

  useEffect(() => {
    if (show && filterType) {
      onFilter(filterType);
    }
  }, [show, filterType, onFilter]);

  const handleFilterTypeChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    setFilterType(newValue);
  };

  const getLabelText = () => {
    switch (filterType) {
      case "Price":
        return "Price";
      case "Duration":
        return "Duration";
      case "Departure Time":
        return "Departure Time";
      case "Return Time":
        return "Return Time";
      default:
        return "Filter";
    }
  };

  return show ? (
    <Autocomplete
      id="filter-demo"
      options={["Price", "Duration", "Departure Time", "Return Time"]}
      getOptionLabel={(option) => option}
      value={filterType}
      onChange={handleFilterTypeChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={getLabelText()}
          sx={{
            marginBottom: "16px",
            width: "200px",
          }}
        />
      )}
    />
  ) : null;
};

export default FilterOptions;
