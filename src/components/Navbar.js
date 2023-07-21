import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Today, AddCircleOutline, EventAvailable } from "@mui/icons-material";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box
      component='nav'
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "15%",
        height: "100vh",
        bgcolor: "#ffffff",
        padding: 2,
        zIndex: 1,
        pt: 10,
        boxShadow: "0 2px 10px rgba(9,14,120,0.3)",
      }}
    >
      <Box sx={{ mt: 2 }}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            color='primary'
            sx={{
              mb: 1,
              width: "100%",
              fontWeight: 700,
              color: activeTab === "ongoing" ? "#090e82" : "#7d7d7d",
              display: "flex",
              alignItems: "center",
              borderBottom: `${
                activeTab === "ongoing" ? "3px solid #090e82" : ""
              }`,
              borderRadius: "0",
            }}
            onClick={() => handleTabClick("ongoing")}
            fullWidth
          >
            <Today sx={{ fontSize: "25px", mr: 1 }} />
            Ongoing
          </Button>
        </Link>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            color='primary'
            sx={{
              mb: 1,
              width: "100%",
              fontWeight: 700,
              color: activeTab === "create" ? "#090e82" : "#7d7d7d",
              display: "flex",
              alignItems: "center",
              borderBottom: `${
                activeTab === "create" ? "3px solid #090e82" : ""
              }`,
              borderRadius: "0",
            }}
            onClick={() => handleTabClick("create")}
            fullWidth
          >
            <AddCircleOutline sx={{ fontSize: "25px", mr: 1 }} />
            Create
          </Button>
        </Link>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            color='primary'
            sx={{
              width: "100%",
              fontWeight: 700,
              color: activeTab === "existing" ? "#090e82" : "#7d7d7d",
              display: "flex",
              alignItems: "center",
              borderBottom: `${
                activeTab === "existing" ? "3px solid #090e82" : ""
              }`,
              borderRadius: "0",
            }}
            onClick={() => handleTabClick("existing")}
            fullWidth
          >
            <EventAvailable sx={{ fontSize: "25px", mr: 1 }} />
            Existing
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
