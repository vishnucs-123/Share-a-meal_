import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Paper, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const DonateForm = () => {
  const [food, setFood] = useState({
    name: "",
    foodDescription: "",
    quantity: "",
    location: "",
    contact: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    foodDescription: false,
    quantity: false,
    location: false,
    contact: false,
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Reset error when user types
  };

  const validateForm = () => {
    let newErrors = {
      name: !food.name.trim(),
      foodDescription: !food.foodDescription.trim(),
      quantity: !food.quantity.trim(),
      location: !food.location.trim(),
      contact: !/^\d{10}$/.test(food.contact), // Validate 10-digit phone number
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    try {
      await axios.post("http://localhost:5000/donate-food", food);
      alert("Food Donation Submitted!");
      setFood({ name: "", foodDescription: "", quantity: "", location: "", contact: "" });
    } catch (error) {
      alert("Error submitting donation. Try again!");
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
            maxWidth: "700px",
            minWidth: "500px",
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
                strings: ["Donate Food & Help the Needy"],
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Your Name"
                  name="name"
                  fullWidth
                  onChange={handleChange}
                  value={food.name}
                  error={errors.name}
                  helperText={errors.name ? "Name is required" : ""}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Food Description"
                  name="foodDescription"
                  fullWidth
                  multiline
                  rows={3}
                  onChange={handleChange}
                  value={food.foodDescription}
                  error={errors.foodDescription}
                  helperText={errors.foodDescription ? "Food Description is required" : ""}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  name="quantity"
                  fullWidth
                  onChange={handleChange}
                  value={food.quantity}
                  error={errors.quantity}
                  helperText={errors.quantity ? "Quantity is required" : ""}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Location"
                  name="location"
                  fullWidth
                  onChange={handleChange}
                  value={food.location}
                  error={errors.location}
                  helperText={errors.location ? "Location is required" : ""}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact (10-digit)"
                  name="contact"
                  fullWidth
                  onChange={handleChange}
                  value={food.contact}
                  error={errors.contact}
                  helperText={errors.contact ? "Enter a valid 10-digit contact number" : ""}
                  sx={inputStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={buttonStyle}>
                  Submit Donation
                </Button>
              </Grid>
            </Grid>
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
  padding: "12px",
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

export default DonateForm;
