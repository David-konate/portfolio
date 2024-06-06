import React, { useState } from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Switch,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material/";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../utils";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar
        className="navBar"
        position="sticky"
        sx={{ top: 0, backgroundColor: "transparent" }}
      >
        <Container maxWidth={"xl"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Hidden smDown>
              <Box className="no-logo" onClick={navigate(`/`)}>
                {" "}
                <Typography>David Konaté</Typography>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{
                  justifyContent: "center",
                  flex: 1,
                  height: "100%",
                  width: "70%",
                }}
              >
                {links.map((link) => (
                  <NavLink
                    className="navbar_link"
                    key={link.label}
                    to={link.path}
                  >
                    {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                  </NavLink>
                ))}
              </Stack>
            </Hidden>
            {/* 
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Hidden smDown>
                <Switch
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                  inputProps={{ "aria-label": "toggle theme" }}
                />
              </Hidden>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        className="drawer"
      >
        <List className="drawer-list">
          {links.map((link) => (
            <ListItem
              key={link.label}
              onClick={handleDrawerClose}
              className="drawer-item"
            >
              <NavLink to={link.path} className="drawer-link">
                <ListItemText
                  sx={{ padding: 1 }}
                  className="drawer-text"
                  primary={
                    link.label.charAt(0).toUpperCase() + link.label.slice(1)
                  }
                />
              </NavLink>
            </ListItem>
          ))}
        </List>
        {/* <Box className="drawer-theme-switch">
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            aria-label="toggle theme"
          />
        </Box> */}
      </Drawer>
    </React.Fragment>
  );
};

export default NavBar;
