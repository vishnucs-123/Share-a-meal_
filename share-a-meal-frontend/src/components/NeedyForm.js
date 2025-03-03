import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const NeedyForm = () => {
  const [needy, setNeedy] = useState({ name: "", location: "", contact: "" });

  const [errors, setErrors] = useState({ name: false, location: false, contact: false });

  const handleChange = (e) => {
    setNeedy({ ...needy, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Reset error when user types
  };

  const validateForm = () => {
    let newErrors = {
      name: !needy.name.trim(),
      location: !needy.location.trim(),
      contact: !/^\d{10}$/.test(needy.contact), // Validate 10-digit contact number
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true); // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    try {
      await axios.post("http://localhost:5000/find-needy", needy);
      alert("Needy person details submitted!");
      setNeedy({ name: "", location: "", contact: "" });
    } catch (error) {
      alert("Error submitting details. Try again!");
    }
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('/logo1.jpg')", // Ensure logo1.jpg is in the public folder
      }}
    >
      {/* Dark Overlay for Better Visibility */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)", // Slight dark overlay
          top: 0,
          left: 0,
        }}
      />

      {/* Animated Glassmorphism Form Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 2 }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "40px",
            borderRadius: "20px",
            backdropFilter: "blur(15px)",
            background: "rgba(255, 255, 255, 0.15)",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
            textAlign: "center",
            maxWidth: "600px",
            minWidth: "450px",
            position: "relative",
          }}
        >
          {/* Typing Animation for Heading */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#00e5ff", // Light Blue Heading
              textShadow: "0 0 20px rgba(0, 229, 255, 0.8)",
              marginBottom: "20px",
            }}
          >
            <Typewriter
              options={{
                strings: ["Find Help for the Needy"],
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={needy.name}
              error={errors.name}
              helperText={errors.name ? "Name is required" : ""}
              sx={inputStyle}
            />
            <TextField
              label="Location"
              name="location"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={needy.location}
              error={errors.location}
              helperText={errors.location ? "Location is required" : ""}
              sx={inputStyle}
            />
            <TextField
              label="Contact"
              name="contact"
              fullWidth
              margin="normal"
              onChange={handleChange}
              value={needy.contact}
              error={errors.contact}
              helperText={errors.contact ? "Enter a valid 10-digit contact number" : ""}
              sx={inputStyle}
            />

            <Button type="submit" variant="contained" sx={buttonStyle}>
              Submit Details
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
};

// **🔹 Input Field Style (Neon Effect)**
const inputStyle = {
  input: { color: "#fff" },
  "& label": { color: "#00e5ff" }, // Light Blue Labels
  "& label.Mui-focused": { color: "#00e5ff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.6)" },
    "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 1)" },
    "&.Mui-focused fieldset": { borderColor: "#00e5ff" },
  },
};

// **🔹 Button Style (Glow Effect)**
const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #00e5ff, #007bff)", // Gradient Button
  color: "#fff",
  borderRadius: "10px",
  textTransform: "none",
  boxShadow: "0px 5px 15px rgba(0, 229, 255, 0.5)",
  "&:hover": {
    background: "linear-gradient(45deg, #00c2d1, #0056b3)",
  },
};

export default NeedyForm;
