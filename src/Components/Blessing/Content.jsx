import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Stack, Paper } from "@mui/material";

function Content() {
  const [content, setContent] = useState(false);

  const contentHandler = () => {
    setContent(!content);
  };

  return (
    <Paper
      onClick={contentHandler}
      elevation={8}
      sx={{
        backgroundColor: "grey",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "15px",
      }}
      component={motion.div}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
    >
      <Stack>
        <Typography variant="h6" component={motion.p} layout="center">
          Hey there! 🚀
        </Typography>

        {content && (
          <Typography>I actually do like your voice... kinda 🙄</Typography>
        )}
      </Stack>
    </Paper>
  );
}

export default Content;
