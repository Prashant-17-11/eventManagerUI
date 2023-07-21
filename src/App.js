import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // Import @mui components
import Navbar from "./components/Navbar";
import TopElement from "./components/Topelement";
import OngoingEvents from "./components/OngoingEvents";
import Footer from "./components/Footer";
import Event from "./components/Event";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <Box
        className='app'
        sx={{
          backgroundColor: "#f6f6f6",
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        {isLargeScreen ? (
          <>
            <Navbar />
            <Box
              sx={{
                ml: "15%",
                width: "85%",
                boxSizing: "border-box",
              }}
            >
              <TopElement />
              <Routes>
                <Route exact path='/' element={<OngoingEvents />} />
                <Route exact path='/event' element={<Event />} />
              </Routes>
            </Box>
          </>
        ) : (
          <>
            <TopElement />
            <Routes>
              <Route exact path='/' element={<OngoingEvents />} />
              <Route exact path='/event' element={<Event />} />
            </Routes>
            <Footer />
          </>
        )}
      </Box>
    </Router>
  );
}

export default App;
