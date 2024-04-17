import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type LabelInput = {
    label: string
    type: string
    value: string
    onChange: (value: string) => void
}

export default function InputLogin(props: LabelInput) {
    const { label, type, value, onChange } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

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
                    value={value}
                    onChange={handleChange}
                    style={{paddingBottom: "15px"}}
                />
            </div>
        </Box>
    );
}
