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
} from "@mui/material/";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../utils";

const NavBar = () => {
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
              <Box className="no-logo" onClick={() => navigate(`/`)}>
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
                  className="my-list-text"
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
