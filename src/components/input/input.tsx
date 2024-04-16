import { TextField } from "@mui/material";

interface IInput {
  label: string;
  required?: boolean;
  name?: string;
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}

const Input = ({ label, ...props }: IInput) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size={"small"}
      sx={{ width: "100%" }}
      {...props}
    />
  );
};

export default Input;
