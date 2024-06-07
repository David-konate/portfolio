import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

// Importez vos sous-composants ici
import Technologies from "../components/myWork/Technologies";
import Developer from "../components/myWork/Developer";
import AppDesigner from "../components/myWork/AppDesigner";

const MyWork = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Technologies />); // Set initial component to Technologies

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
            Mon Travail
          </Typography>
          <List>
            <ListItem selected={selectedComponent === <Technologies />}>
              {" "}
              {/* Highlight Technologies */}
              <ListItemText
                className="my-list-text"
                primary="Technologies"
                onClick={() => handleComponentChange(<Technologies />)}
              />
            </ListItem>
            <ListItem selected={selectedComponent === <Developer />}>
              {" "}
              {/* Highlight Developer */}
              <ListItemText
                className="my-list-text"
                primary="Développeur"
                onClick={() => handleComponentChange(<Developer />)}
              />
            </ListItem>
            <ListItem selected={selectedComponent === <AppDesigner />}>
              {" "}
              {/* Highlight AppDesigner */}
              <ListItemText
                className="my-list-text"
                primary="Concepteur Développeur"
                onClick={() => handleComponentChange(<AppDesigner />)}
              />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ width: "85%", padding: "20px" }}>{selectedComponent}</Box>
      </Box>
    </Container>
  );
};

export default MyWork;