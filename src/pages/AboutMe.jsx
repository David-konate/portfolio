import React, { useState } from "react";
import { Box, Container, List, ListItem, ListItemText } from "@mui/material";

import Bio from "../components/abouMe/Bio";
import Interest from "../components/abouMe/Interest";

const FakeMenu = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        {/* Menu latéral */}
        <Box
          sx={{
            width: "15%",
            borderRight: "1px solid #ccc",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <List>
            <ListItem button onClick={() => handleComponentChange(<Bio />)}>
              <ListItemText primary="Bio" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleComponentChange(<Interest />)}
            >
              <ListItemText primary="Intérêts" />
            </ListItem>
            {/* Ajoutez autant d'éléments de menu que nécessaire */}
          </List>
        </Box>

        {/* Contenu principal */}
        <Box sx={{ width: "85%", padding: "20px" }}>{selectedComponent}</Box>
      </Box>
    </Container>
  );
};

export default FakeMenu;
