import React from "react";
import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { linksFooter } from "../utils";

function Footer() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "transparent",
      }}
    >
      <AppBar
        className="footer"
        sx={{ backgroundColor: "transparent" }}
        position="static"
      >
        <Toolbar>
          <Container>
            <Stack
              spacing={3}
              p={1}
              direction={isSmallScreen ? "column" : "row"}
              justifyContent="center"
              alignItems="center"
            >
              {linksFooter.map((link) => (
                <NavLink
                  style={{
                    padding: 5,
                    borderRadius: 5,
                    textDecoration: "none",
                    color: "white",
                  }}
                  className="navbar_link"
                  key={link.label}
                  to={link.path}
                >
                  {link.label.charAt(0).toUpperCase() + link.label.slice(1)}
                </NavLink>
              ))}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
