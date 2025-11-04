import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="body1">User does not exist</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {user.occupation} — {user.location}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {user.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/photos/${user._id}`}
          sx={{ marginTop: 2 }}
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
