import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import Bio from "../components/abouMe/Bio";
import Interest from "../components/abouMe/Interest";
import Qualification from "../components/abouMe/Qualification";

const AboutMeMenu = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Bio />); // Set initial component to Bio

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "15%",
            borderRight: "1px solid #ccc",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: "10px",
              color: "var(--theme-secondary-color)",
              fontWeight: "bold",
            }}
          >
            Qui suis-je?
          </Typography>
          <List>
            <ListItem
              className={
                selectedComponent.type === Bio
                  ? "my-list-item selected-link"
                  : "my-list-item"
              }
              onClick={() => handleComponentChange(<Bio />)}
              style={{ cursor: "pointer" }} // Ajoutez le style cursor pointer
            >
              <ListItemText primary="Bio" />
            </ListItem>
            <ListItem
              className={
                selectedComponent.type === Interest
                  ? "my-list-item selected-link"
                  : "my-list-item"
              }
              onClick={() => handleComponentChange(<Interest />)}
              style={{ cursor: "pointer" }} // Ajoutez le style cursor pointer
            >
              <ListItemText primary="Intérêts" />
            </ListItem>
            <ListItem
              className={
                selectedComponent.type === Qualification
                  ? "my-list-item selected-link"
                  : "my-list-item"
              }
              onClick={() => handleComponentChange(<Qualification />)}
              style={{ cursor: "pointer" }} // Ajoutez le style cursor pointer
            >
              <ListItemText primary="Qualifications" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ width: "85%", padding: "20px" }}>{selectedComponent}</Box>
      </Box>
    </Container>
  );
};

export default AboutMeMenu;
