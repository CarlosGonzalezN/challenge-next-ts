import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignmentBaseline: "auto",
      }}
    >
      <Box>
        <Typography>challenge Next</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
