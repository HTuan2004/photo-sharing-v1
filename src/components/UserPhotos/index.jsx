import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const userId = useParams();
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);
  if (!user) {
    return <Typography>User does not exist</Typography>;
  }

  if (!photos || photos.length === 0) {
    return <Typography>Photos of {user.first_name} not found</Typography>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} sx={{ marginBottom: 3 }}>
          <CardContent>
            <CardMedia
              component="img"
              height="400"
              image={`images/${photo.file_name}`}
              alt="user photo"
            />
            <Typography variant="caption" display="block" sx={{ marginTop: 1 }}>
              Uploaded on: {new Date(photo.date_time).toLocaleString()}
            </Typography>
            {photo.comments && photo.comments.length > 0 && (
              <React.Fragment>
                <Divider sx={{ marginY: 1 }} />
                <Typography variant="subtitle1">Comments:</Typography>
                {photo.comments.map((cmt) => (
                  <CardContent key={cmt._id} sx={{ paddingBottom: 1 }}>
                    <Typography variant="body2">
                      <Link to={`/users/${cmt.user._id}`}>
                        {cmt.user.first_name} {cmt.user.last_name}
                      </Link>{" "}
                      commented on {new Date(cmt.date_time).toLocaleString()}:
                    </Typography>
                    <Typography variant="body1" sx={{ marginLeft: 2 }}>
                      {cmt.comment}
                    </Typography>
                  </CardContent>
                ))}
              </React.Fragment>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
