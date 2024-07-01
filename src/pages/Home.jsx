import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Hidden } from "@mui/material";
import Game from "../components/game/Game";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    const textContainer = document.querySelector(".left-text");
    if (textContainer) {
      const textChildren = textContainer.querySelectorAll("Typography");
      let delay = 0;
      textChildren.forEach((child) => {
        child.style.transitionDelay = `${delay}s`;
        delay += 0.5; // Adjust the scrolling speed as per your preference
        child.classList.add("typing-animation");
      });
    }
  }, []);

  const handleLinkedInClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container>
      <Helmet>
        <title>Portfolio - David Konaté</title>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de David Konaté, concepteur et développeur d'applications.
Découvrez mes réalisations, mes compétences et mon expertise dans la création d'applications web et mobiles innovantes."
        />
      </Helmet>
      <Grid
        className="home"
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={6} className="left-text">
          <Typography className="typing-animation">
            Bonjour et bienvenue, je suis
          </Typography>
          <Typography variant="h2" className="typing-animation">
            David Konaté
          </Typography>
          <Typography className="flex flex-col items-start" variant="h4">
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
          <Box display={{ xs: "block", md: "block" }}>
            <Game />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
