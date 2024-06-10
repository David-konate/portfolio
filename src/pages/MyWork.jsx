import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Importez vos sous-composants ici
import Technologies from "../components/myWork/Technologies";
import Developer from "../components/myWork/Developer";
import AppDesigner from "../components/myWork/AppDesigner";

const MyWork = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Technologies />); // Définir le composant initial sur Technologies

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
    if (isSmallScreen) {
      setDrawerOpen(false); // Fermez le tiroir sur les petits écrans après avoir sélectionné un composant
    }
  };

  const renderDrawer = () => (
    <Drawer
      className="custom-drawer" // Utilisez la classe custom-drawer ici
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List className="custom-list">
        <ListItem
          button
          selected={selectedComponent.type === Technologies}
          onClick={() => handleComponentChange(<Technologies />)}
        >
          <ListItemText primary="Technologies" />
        </ListItem>
        <ListItem
          button
          selected={selectedComponent.type === Developer}
          onClick={() => handleComponentChange(<Developer />)}
        >
          <ListItemText primary="Développeur" />
        </ListItem>
        <ListItem
          button
          selected={selectedComponent.type === AppDesigner}
          onClick={() => handleComponentChange(<AppDesigner />)}
        >
          <ListItemText primary="Concepteur Développeur" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ display: "flex" }}>
        {isSmallScreen && (
          <>
            {renderDrawer()}
            <Box sx={{ width: "100%", padding: "20px" }}>
              <MenuIcon
                onClick={() => setDrawerOpen(true)}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </>
        )}
        {!isSmallScreen && ( // Afficher le menu de base uniquement sur les grands écrans
          <Box
            sx={{
              width: "15%",
              borderRight: "1px solid #ddd",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              Mon Métier
            </Typography>
            <List>
              <ListItem
                className={
                  selectedComponent.type === Technologies
                    ? "my-list-text selected-link"
                    : "my-list-text"
                }
                onClick={() => handleComponentChange(<Technologies />)}
                style={{ cursor: "pointer" }}
              >
                <ListItemText primary="Technologies" />
              </ListItem>
              <ListItem
                className={
                  selectedComponent.type === Developer
                    ? "my-list-text selected-link"
                    : "my-list-text"
                }
                onClick={() => handleComponentChange(<Developer />)}
                style={{ cursor: "pointer" }}
              >
                <ListItemText primary="Développeur" />
              </ListItem>
              <ListItem
                className={
                  selectedComponent.type === AppDesigner
                    ? "my-list-text selected-link"
                    : "my-list-text"
                }
                onClick={() => handleComponentChange(<AppDesigner />)}
                style={{ cursor: "pointer" }}
              >
                <ListItemText primary="Concepteur Développeur" />
              </ListItem>
            </List>
          </Box>
        )}

        <Box sx={{ width: isSmallScreen ? "100%" : "85%", padding: "20px" }}>
          {selectedComponent}
        </Box>
      </Box>
    </Container>
  );
};

export default MyWork;
