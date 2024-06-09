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
            sx={{
              marginBottom: "10px",
              color: "var(--theme-secondary-color)",
              fontWeight: "bold",
            }} // Ajoutez le style cursor pointer
          >
            Mon Métier
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                className={
                  selectedComponent.type === Technologies
                    ? "my-list-text selected-link"
                    : "my-list-text"
                }
                primary="Technologies"
                onClick={() => handleComponentChange(<Technologies />)}
                style={{ cursor: "pointer" }} // Ajoutez le style cursor pointer
              />
            </ListItem>
            <ListItem>
              <ListItemText
                className={
                  selectedComponent.type === Developer
                    ? "my-list-text selected-link"
                    : "my-list-text"
                }
                primary="Développeur"
                onClick={() => handleComponentChange(<Developer />)}
                style={{ cursor: "pointer" }} // Ajoutez le style cursor pointer
              />
            </ListItem>
            <ListItem>
              <ListItemText
                className={
                  selectedComponent.type === AppDesigner
                    ? "my-list-text selected-link"
                    : "my-list-text"
                }
                primary="Concepteur Développeur"
                onClick={() => handleComponentChange(<AppDesigner />)}
                style={{ cursor: "pointer" }} // Ajoutez le style cursor pointer
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
