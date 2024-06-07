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
            sx={{ marginBottom: "10px" }}
          >
            Qui suis-je?
          </Typography>
          <List>
            <ListItem selected={selectedComponent === <Bio />}>
              {" "}
              {/* Highlight Bio */}
              <ListItemText
                className="my-list-text"
                primary="Bio"
                onClick={() => handleComponentChange(<Bio />)}
              />
            </ListItem>
            <ListItem onClick={() => handleComponentChange(<Interest />)}>
              <ListItemText className="my-list-text" primary="Intérêts" />
            </ListItem>
            <ListItem onClick={() => handleComponentChange(<Qualification />)}>
              <ListItemText className="my-list-text" primary="Qualifications" />
            </ListItem>
            {/* Add more menu items as needed */}
          </List>
        </Box>

        <Box sx={{ width: "85%", padding: "20px" }}>{selectedComponent}</Box>
      </Box>
    </Container>
  );
};

export default AboutMeMenu;
