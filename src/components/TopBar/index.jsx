import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";
/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const { userId } = useParams() || {};
  let rightText = "Photo Sharing App";

  if (
    location.pathname.startsWith("/users/") &&
    !location.pathname.includes("/photos")
  ) {
    const user = models.userModel(userId);
    if (user) rightText = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/")) {
    const user = models.userModel(userId);
    if (user) rightText = `Photos of ${user.first_name} ${user.last_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Vũ Hoàng Tuấn</Typography>
        <Typography variant="h6">{rightText}</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
