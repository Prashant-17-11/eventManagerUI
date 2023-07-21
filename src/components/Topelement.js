import React from "react";
import profile from "../imgs/profile.png";
import { Box, Avatar } from "@mui/material";

const TopElement = () => {
  const topElementData = {
    username: "Username",
    venue: "VENUE NAME",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#f3f3f3",
        p: 2,
        pb: 1,
        borderBottom: "1px solid #C6C6C6",
      }}
    >
      <Box
        sx={{
          fontWeight: "600",
          fontSize: "22px",
          color: "#020655",
          lineHeight: "0.8", // Adjusted line height to reduce the gap
        }}
      >
        Hi, {topElementData.username}
        <br />
        <span style={{ fontWeight: "700", fontSize: "12px", color: "#7D7D7D" }}>
          {topElementData.venueName}
        </span>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Avatar
          alt='Profile'
          src={profile}
          sx={{ width: "64px", height: "64px" }}
        />
        <span
          style={{
            position: "absolute",
            top: "1px",
            right: "1px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            backgroundColor: "#B71B42",
            border: "2px solid #f3f3f3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "8px",
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          1
        </span>
      </Box>
    </Box>
  );
};

export default TopElement;
