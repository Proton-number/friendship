import React, { useState, useEffect } from "react";
import { SuperBalls } from "@uiball/loaders";

import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography, Stack } from "@mui/material";

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3600);
  }, []);
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <Box
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          component={motion.div}
          sx={{
            color: "white",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Stack
            spacing={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3.3 }}
              component={motion.p}
              variant="h5"
            >
              It's 2024! and you still have a big head 🙄
            </Typography>

            <SuperBalls size={45} speed={1.4} color="white" />
          </Stack>
        </Box>
      )}
    </AnimatePresence>
  );
}

export default Loading;
