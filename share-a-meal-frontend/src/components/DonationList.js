import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/donations")
      .then((res) => setDonations(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

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
        padding: "50px 0",
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

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 2, width: "100%" }}
      >
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#00e5ff",
              textShadow: "0 0 20px rgba(0, 229, 255, 0.8)",
              marginBottom: "20px",
            }}
          >
            Available Food Donations
          </Typography>
        </Box>

        {donations.length > 0 ? (
          // ✅ Only render Grid when donations exist
          <Grid container spacing={3} justifyContent="center">
            {donations.map((donation, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={10}
                  sx={{
                    padding: "20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(15px)",
                    background: "rgba(255, 255, 255, 0.15)",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00e5ff" }}>
                    {donation.name}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Food Description:</strong> {donation.foodDescription}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Quantity:</strong> {donation.quantity}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Location:</strong> {donation.location}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Contact:</strong> {donation.contact}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          // ✅ No blank box, just this message
          <Typography
            variant="h6"
            color="white"
            textAlign="center"
            sx={{ mt: 3, fontWeight: "bold" }}
          >
            No donations available at the moment.
          </Typography>
        )}
      </motion.div>
    </Container>
  );
};

export default DonationList;
