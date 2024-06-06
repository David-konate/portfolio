import React, { useEffect } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Game from "../components/game/Game";

const Home = () => {
  useEffect(() => {
    const textContainer = document.querySelector(".left-text");
    if (textContainer) {
      const textChildren = textContainer.querySelectorAll("Typography");
      let delay = 0;
      textChildren.forEach((child) => {
        child.style.transitionDelay = `${delay}s`;
        delay += 0.5; // Ajustez la vitesse de défilement selon vos préférences
        child.classList.add("typing-animation");
      });
    }
  }, []);

  const handleLinkedInClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container>
      <Grid
        className="home"
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
      >
        <Grid item xs={12} md={6} className="left-text">
          <Typography className="typing-animation">
            Bonjour et bienvenue, je suis
          </Typography>
          <Typography variant="h2" className="typing-animation">
            David Konaté
          </Typography>
          <Typography className="title-chevron typing-animation" variant="h4">
            {" "}
            &gt; Développeur Full-Stack
          </Typography>
          <Typography mt={5} className="comment typing-animation">
            // Retrouvez ci-dessous mon GitHub
          </Typography>
          <Typography className="comment typing-animation">
            // ainsi que mon LinkedIn :
          </Typography>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item>
              <Typography className="const typing-animation">const</Typography>
            </Grid>
            <Grid item>
              <Typography className="name-const typing-animation">
                githubLink
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="typing-animation">=</Typography>
            </Grid>
          </Grid>
          <Typography
            marginLeft={3}
            onClick={() =>
              handleLinkedInClick("https://github.com/David-konate")
            }
            className="link typing-animation"
          >
            https://github.com/David-konate
          </Typography>
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item>
              <Typography className="const typing-animation">const</Typography>
            </Grid>
            <Grid item>
              <Typography className="name-const typing-animation">
                linkedinLink
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="typing-animation">=</Typography>
            </Grid>
          </Grid>
          <Typography
            marginLeft={3}
            onClick={() =>
              handleLinkedInClick(
                "https://www.linkedin.com/in/david-konaté-670172194/"
              )
            }
            className="link typing-animation"
          >
            https://www.linkedin.com/in/david-konaté-670172194/
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="right-game" textAlign="center">
          <Box>
            <Game />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
