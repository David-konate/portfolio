import React, { useState } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Bio from "../components/abouMe/Bio";
import Interest from "../components/abouMe/Interest";
import Qualification from "../components/abouMe/Qualification";

const AboutMeMenu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedComponent, setSelectedComponent] = useState(<Bio />);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
    setDrawerOpen(false); // Close the drawer after selecting a component
  };

  const renderDrawer = () => (
    <Drawer
      className="custom-drawer"
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List className="custom-list">
        <ListItem
          button
          selected={selectedComponent.type === Bio}
          onClick={() => handleComponentChange(<Bio />)}
        >
          <ListItemText primary="Bio" />
        </ListItem>
        <ListItem
          button
          selected={selectedComponent.type === Interest}
          onClick={() => handleComponentChange(<Interest />)}
        >
          <ListItemText primary="Intérêts" />
        </ListItem>
        <ListItem
          button
          selected={selectedComponent.type === Qualification}
          onClick={() => handleComponentChange(<Qualification />)}
        >
          <ListItemText primary="Qualifications" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
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

        {!isSmallScreen && (
          <Box
            sx={{
              width: "15%",
              borderRight: "1px solid #ddd",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ marginBottom: "10px" }}
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
                style={{ cursor: "pointer" }}
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
                style={{ cursor: "pointer" }}
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
                style={{ cursor: "pointer" }}
              >
                <ListItemText primary="Qualifications" />
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

export default AboutMeMenu;
