import { Box, TextField } from "@mui/material";

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
    <Box display="flex" alignItems="center" justifyContent="center">
      <TextField
        id="outlined-basic"
        placeholder="Buscar"
        label={label}
        variant="outlined"
        size="small"
        sx={{ width: "100%" }}
        {...props}
      />
    </Box>
  );
};

export default FieldText;
