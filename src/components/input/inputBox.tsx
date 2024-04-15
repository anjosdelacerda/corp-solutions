import { Box } from "@mui/material";

const InputBox = ({ children }: React.PropsWithChildren) => {
  return (
    <Box flexGrow={1} flexDirection={"column"} display={"flex"} gap={"30px"}>
      {children}
    </Box>
  );
};

export default InputBox;
