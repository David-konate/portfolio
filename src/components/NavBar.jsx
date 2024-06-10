import React, { useState } from "react";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material/";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../utils";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar
        className="navBar"
        position="sticky"
        sx={{ top: 0, backgroundColor: "var( --theme-primary-color-back)" }}
      >
        <Container maxWidth={"xl"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box className="no-logo" onClick={() => navigate(`/`)}>
              <Typography
                sx={{
                  color: "var(--theme-link-color)",
                  fontWeight: "bold",
                }}
              >
                David Konaté
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                flex: 1,
                height: "100%",
                width: "70%",
                display: { xs: "none", sm: "flex" },
              }}
            >
              {links.map((link) => (
                <NavLink
                  style={{
                    padding: 5,
                    borderRadius: 5,
                    textDecoration: "none",
                  }}
                  className={({ isActive }) =>
                    isActive ? "navbar_link active" : "navbar_link"
                  }
                  key={link.label}
                  to={link.path}
                >
                  {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                </NavLink>
              ))}
            </Stack>

            <Hidden mdUp>
              <Box onClick={handleDrawerOpen}>
                <Typography
                  sx={{
                    color: "var(--theme-link-color)",
                    fontWeight: "bold",
                  }}
                >
                  Menu
                </Typography>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        className="second-drawer"
      >
        <List className="drawer-list">
          {links.map((link) => (
            <ListItem
              key={link.label}
              onClick={handleDrawerClose}
              className={`drawer-item`}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "drawer-link selected" : "drawer-link"
                }
              >
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
      </Drawer>
    </React.Fragment>
  );
};

export default NavBar;
