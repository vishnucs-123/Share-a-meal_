import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DonateForm from "./components/DonateForm";
import NeedyForm from "./components/NeedyForm";
import DonationList from "./components/DonationList";
import NeedyList from "./components/NeedyList";
import Navbar from "./components/Navbar";
import logo from "./assets/logo1.jpg"; // ✅ Import the image

const App = () => {
  const containerStyle = {
    backgroundImage: `url(${logo})`, // ✅ Use imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Router>
      <div style={containerStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateForm />} />
          <Route path="/find-needy" element={<NeedyList />} />
          <Route path="/needy" element={<NeedyForm />} />
          <Route path="/donated" element={<DonationList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;