import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type LabelInput = {
  label: string;
  type: string;
  name?: string;
  register?: any;
};

export default function InputRegister(props: LabelInput) {
  const { label, type, name, register } = props;

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label={label}
        type={type}
        name={name}
        {...register(name)}
        size="small"
        sx={{ width: "428px" }}
      />
    </Box>
  );
}
