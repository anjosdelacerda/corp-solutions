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
  maxLength?: number;
}

const Input = ({ label, onChange, maxLength, ...props }: IInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.preventDefault();
      return;
    }
    onChange?.(e);
  };
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      sx={{ width: "100%" }}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
