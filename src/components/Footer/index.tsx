import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <Box sx={{ p: 2, mt: "auto", bgcolor: "#f5f5f5" }}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </Box>
  );
};

export default Footer;
