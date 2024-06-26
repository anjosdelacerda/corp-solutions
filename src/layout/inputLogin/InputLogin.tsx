import { Box, TextField } from "@mui/material";

type LabelInput = {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

export default function InputLogin(props: LabelInput) {
  const { label, type, value, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        required
        id="outlined-required"
        label={label}
        type={type}
        value={value}
        onChange={handleChange}
        size="small"
        sx={{ width: "428px" }}
      />
    </Box>
  );
}
