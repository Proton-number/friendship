import React from "react";
import {
  Box,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { motion } from "framer-motion";
import Qrcode from "/src/Components/Blessing/images/qr_code_via_10015_io (1).png";

function Qcode() {
  const theme = createTheme({
    typography: {
      fontFamily: "Caveat, cursive",
    },
  });

  return (
    <Stack
      component={motion.div}
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 3.7, duration: 1 }}
      spacing={3}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Scan the code below baby girl 😘</Typography>
      </ThemeProvider>
      <Box>
        <Box
          component="img"
          src={Qrcode}
          sx={{ width: "300px", height: "auto" }}
        />
      </Box>
    </Stack>
  );
}

export default Qcode;
