import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type LabelInput = {
    label: string
    type: string
    name?: string
    register?: any
}

export default function InputRegister(props: LabelInput) {
    const { label, type, name, register } = props;

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '47ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label={label}
                    type={type}
                    name={name}
                    {...register(name)}
                    />
                
            </div>
        </Box>
    );
}
