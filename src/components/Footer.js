import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Today, AddCircleOutline, EventAvailable } from "@mui/icons-material";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box
      component='div'
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "80px",
        bgcolor: "#ffffff",
        borderRadius: "20px 20px 0 0",
        boxShadow: "0 2px 15px 5px rgba(9,14,120,0.3)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 2,
          pt: 0,
          position: "relative",
        }}
      >
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            color='primary'
            sx={{
              flex: 1,
              textAlign: "center",
              flexDirection: "column",
              color: activeTab === "ongoing" ? "#090e82" : "#7d7d7d",
              fontSize: "10px",
              fontWeight: 700,
              pt: 2,
              borderTop: `${
                activeTab === "ongoing" ? "3px solid #090e82" : ""
              }`,
              borderRadius: "0",
            }}
            onClick={() => handleTabClick("ongoing")}
          >
            <Today sx={{ fontSize: "30px" }} />
            Ongoing
          </Button>
        </Link>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            color='primary'
            sx={{
              flex: 1,
              textAlign: "center",
              flexDirection: "column",
              color: activeTab === "create" ? "#090e82" : "#7d7d7d",
              fontSize: "10px",
              fontWeight: 700,
              pt: 2,
              borderTop: `${activeTab === "create" ? "3px solid #090e82" : ""}`,
              borderRadius: "0",
            }}
            onClick={() => handleTabClick("create")}
          >
            <AddCircleOutline sx={{ fontSize: "30px" }} />
            Create
          </Button>
        </Link>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button
            color='primary'
            sx={{
              flex: 1,
              textAlign: "center",
              flexDirection: "column",
              color: activeTab === "existing" ? "#090e82" : "#7d7d7d",
              fontSize: "10px",
              fontWeight: 700,
              pt: 2,
              borderTop: `${
                activeTab === "existing" ? "3px solid #090e82" : ""
              }`,
              borderRadius: "0",
            }}
            onClick={() => handleTabClick("existing")}
          >
            <EventAvailable sx={{ fontSize: "30px" }} />
            Existing
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
