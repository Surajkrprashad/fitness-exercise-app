import "./App.css";
import React from "react";
import {Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import "react-horizontal-scrolling-menu/dist/styles.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>                                                                                                                                                              
      <Footer />
    </Box>
  );
}

export default App;
