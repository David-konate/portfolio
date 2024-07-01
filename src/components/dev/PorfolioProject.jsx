import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  CardMedia,
  Stack,
  Card,
  Box,
  Grid,
} from "@mui/material";
import MonPortrait from "../../assets/portfolio1.png";
import EnCoursDeProjet from "../../assets/portfolio2.png";
import TravailEnEquipe from "../../assets/portfolio3.png";
import ReactLogo from "../../assets/react.jpg";
import ReactSymp from "../../assets/symfony.jpg";

const PortfolioProject = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball">
      <Typography className="title-project slide-in" variant="h3">
        Portfolio
      </Typography>

      <DialogContent className="dialog-ball slide-in">
        <Card className="card-portfolio" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            Je suis un développeur front-end passionné par la création
            d'interfaces utilisateur modernes et réactives. Je suis expérimenté
            dans l'utilisation de React et d'autres bibliothèques JavaScript
            populaires. Je suis également capable de travailler en équipe et de
            gérer des projets de manière autonome.
          </Typography>
        </Card>

        <Box mt={5}>
          <ul className="dialog-list slide-in">
            <li>Développement d'applications Web front-end</li>
            <li>
              Intégration de bibliothèques JavaScript et de frameworks CSS
            </li>
            <li>
              Conception d'interfaces utilisateur réactives et accessibles
            </li>
            <li>Gestion de projets et travail en équipe</li>
          </ul>
        </Box>

        <Box
          className="image-exemple"
          mt={5}
          p={1}
          style={{ overflowY: "hidden" }}
        >
          <Stack direction="row" spacing={2} className="box-image-projet">
            <CardMedia
              component="img"
              image={MonPortrait}
              alt="Mon portrait"
              className="image-projet"
              onClick={() => handleImageClick(MonPortrait)}
            />
            <CardMedia
              component="img"
              image={EnCoursDeProjet}
              alt="Projet en cours"
              className="image-projet"
              onClick={() => handleImageClick(EnCoursDeProjet)}
            />
            <CardMedia
              component="img"
              image={TravailEnEquipe}
              alt="Travail en équipe"
              className="image-projet"
              onClick={() => handleImageClick(TravailEnEquipe)}
            />
          </Stack>
        </Box>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Technologies utilisées
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={ReactLogo}
                alt="Kotlin"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }} // Utilisation des styles en ligne pour définir les dimensions
              />
              <Typography variant="body1" align="center">
                Kotlin
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <Dialog
        open={!!fullScreenImage}
        onClose={handleCloseFullScreenImage}
        fullWidth
        maxWidth="xl"
      >
        <DialogContent>
          <img
            src={fullScreenImage}
            alt="Full Screen"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PortfolioProject;
