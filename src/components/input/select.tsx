import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface ISelect {
  label: string;
  options: string[];
  value: string;
  name?: string;
  onChange?: (value: string) => void | undefined;
}

const SelectInput = ({ label, options, value, onChange }: ISelect) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <FormControl size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        size="small"
        sx={{
          width: "320px",
        }}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
