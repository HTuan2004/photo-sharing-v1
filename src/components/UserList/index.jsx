import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div>
        <Typography variant="body1" paragraph>
          User List - Click to view details
        </Typography>
        <List component="nav">
          {users.map((item) => (
            <React.Fragment key={item.id}>
              <ListItemButton component={Link} to={`/users/${item.id}`}>
                      <ListItemText 
                        primary={`{item.first_name} ${item.last_name ? item.last_name : ""}`} 
                        secondary={item.location ? item.location : null}
                      />
              </ListItemButton>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Typography variant="caption" display="block" style={{marginTop: 8}}>
          Data from models.userListModel()
        </Typography>
      </div>
    );
}

export default UserList;
