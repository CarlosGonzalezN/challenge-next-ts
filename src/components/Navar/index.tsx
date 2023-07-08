import React, { useState } from "react";
import { AppBar, Button, Modal, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar style={{ margin: 0 }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Mi Tienda</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
