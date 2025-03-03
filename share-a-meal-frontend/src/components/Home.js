import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
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
        backgroundImage: "url('/logo1.jpg')", // Make sure the image is in 'public' folder
      }}
    >
      {/* Dark Overlay for Better Text Visibility */}
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

      {/* Stylish Large Quote Box */}
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
            maxWidth: "800px",
            minWidth: "500px",
            position: "relative",
          }}
        >
          {/* Animated Typing Effect for Quote */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontStyle: "italic",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Sharing food is the purest act of kindness.",
                  "A meal shared is a heart touched.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </Typography>

          {/* Subtext */}
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: "500",
              marginTop: "20px",
            }}
          >
            - Be the reason someone smiles today.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Home;
