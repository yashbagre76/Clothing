import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Head() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box>
          <img
            src="/img/allstag.png"
            alt="Logo"
            style={{ height: "50px", width: "auto" }}
          />
        </Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button color="inherit" href="/Home">
            Home
          </Button>
          <Button color="inherit" href="#">
            Collection
          </Button>
          <Button color="inherit" href="/contact-us">
            Contact Us
          </Button>
          <Button color="inherit" href="#">
            Track Your Order
          </Button>
          <Button color="inherit" href="#">
            Sales
          </Button>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<SearchIcon />}
            sx={{
              backgroundColor: "white",
              color: "black",
              ":hover": { backgroundColor: "#d3d3d3" },
            }}
          >
            Search
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PersonIcon />}
            sx={{
              backgroundColor: "white",
              color: "black",
              ":hover": { backgroundColor: "#d3d3d3" },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ShoppingCartIcon />}
            sx={{
              backgroundColor: "white",
              color: "black",
              ":hover": { backgroundColor: "#d3d3d3" },
            }}
          >
            Cart
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Head;
