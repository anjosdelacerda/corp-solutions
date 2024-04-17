import { TextField } from "@mui/material";

interface IInput {
  label: string;
  required?: boolean;
  name?: string;
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}

const FieldText = ({ label, ...props }: IInput) => {
  return (
    <TextField
      id="outlined-basic"
      placeholder="Buscar"
      label={label}
      variant="outlined"
      size="small"
      {...props}
    />
  );
};

export default FieldText;
