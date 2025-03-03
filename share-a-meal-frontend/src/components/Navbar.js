import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed" // Keeps Navbar always at the top
      sx={{
        backgroundColor: "#1976d2",
        zIndex: 1100, // Ensures Navbar stays above all content
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side: Brand Name */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Share-A-Meal
        </Typography>

        {/* Right Side: Navigation Links */}
        <Box>
          <Button component={Link} to="/" sx={navButtonStyle}>
            Home
          </Button>
          <Button component={Link} to="/donate" sx={navButtonStyle}>
            Donate
          </Button>
          <Button component={Link} to="/find-needy" sx={navButtonStyle}>
            Find Needy
          </Button>
          <Button component={Link} to="/needy" sx={navButtonStyle}>
            Needy
          </Button>
          <Button component={Link} to="/donated" sx={navButtonStyle}>
            Donated
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Styling for Navigation Buttons
const navButtonStyle = {
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  margin: "0 8px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
};

export default Navbar;
