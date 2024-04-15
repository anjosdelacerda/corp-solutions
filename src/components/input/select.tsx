import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface ISelect {
  label: string;
  options: string[];
}

const SelectInput = ({ label, options }: ISelect) => {
  return (
    <FormControl size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        value={""}
        label={label}
        size={"small"}
        sx={{
          width: "320px",
        }}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
