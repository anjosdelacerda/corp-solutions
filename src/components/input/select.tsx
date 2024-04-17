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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const SelectInput = ({ label, options }: ISelect) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        size={"small"}
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
