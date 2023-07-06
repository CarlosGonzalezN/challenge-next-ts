import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Mi Tienda</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
