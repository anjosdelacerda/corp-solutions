import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';


type SelectProps = {
    label: string
    value?: string
    name: string
    options: { value: string, label: string }[]
    
}

export default function SelectRegister(props: SelectProps) {
    const { label, value, options, name } = props;

    return (
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '47ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
            select
            label={label}
            value={value}
            name={name}
            fullWidth
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    </Box>
    );
}
