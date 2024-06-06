import React from "react";
import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function Footer() {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleMention = () => {
    navigate("/legal-mentions");
  };

  const handleConf = () => {
    navigate("/privacy-policy");
  };

  const handleRules = () => {
    navigate("/rules");
  };

  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
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
              {/* <Typography className="footer-typography" onClick={handleMention}>
                Mentions Légales
              </Typography>
              <Typography className="footer-typography" onClick={handleConf}>
                Politique de confidentialité
              </Typography>
              <Typography className="footer-typography" onClick={handleRules}>
                Règles du jeu
              </Typography> */}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
