import { TextField } from "@mui/material";

interface IInput {
  label: string;
  required?: boolean;
  name?: string;
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, onChange, ...props }: IInput) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      sx={{ width: "100%" }}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
