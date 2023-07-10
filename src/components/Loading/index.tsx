import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
      <Typography>No hay productos que mostar</Typography>
    </div>
  );
};

export default Loading;
