import React, { useState } from "react";
import {
  Box,
  Grid,
  CardMedia,
  Typography,
  DialogContent,
  Card,
  Stack,
  Dialog,
} from "@mui/material"; // Import des composants Material UI nécessaires

// Importez vos logos ou images pour les technologies utilisées ici

import nextLogo from "../../assets/next.jpg";
import taxi from "../../assets/abtaxi.png";
import taxi2 from "../../assets/abtaxi1.png";
import taxi3 from "../../assets/abtaxi2.png";
import taxi4 from "../../assets/abtaxi3.png";
import taxi5 from "../../assets/abtaxi4.png";

const ABTaxiProject = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball">
      <DialogContent className="dialog-ball slide-in">
        <Typography className="title-project slide-in" variant="h3">
          AB Taxi : Service de taxi en ligne
        </Typography>

        <Card className="card-bonne-place" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            En tant que développeur front-end, j'ai joué un rôle crucial dans ce
            projet en mettant en œuvre diverses fonctionnalités pour un site web
            permettant la réservation en ligne via un formulaire ou une
            redirection d'appel. J'ai développé ce site web de manière autonome,
            en utilisant les API Google pour récupérer les informations Google
            Business et faciliter la communication par e-mail entre les
            utilisateurs du site et le propriétaire de l'entreprise.
          </Typography>
        </Card>
        <Box mt={5}>
          <ul className="dialog-list slide-in">
            <li>Intégration des informations Google Business</li>
            <li>Envoi de mails pour les réservations</li>
          </ul>
        </Box>

        {/* Section présentant les technologies utilisées */}
        <Box mt={5} p={1} style={{ overflowY: "hidden" }}>
          <Stack
            mt={5}
            direction="row"
            spacing={2}
            className="box-image-projet"
          >
            <CardMedia
              component="img"
              image={taxi5}
              alt="Page de recherche d'annonces sur BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(taxi5)}
            />
            <CardMedia
              component="img"
              image={taxi}
              alt="Page de détail d'une annonce sur BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(taxi)}
            />
            <CardMedia
              component="img"
              image={taxi2}
              alt="Page d'accueil de BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(taxi2)}
            />
            <CardMedia
              component="img"
              image={taxi3}
              alt="Page de recherche d'annonces sur BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(taxi3)}
            />
            <CardMedia
              component="img"
              image={taxi4}
              alt="Page de recherche d'annonces sur BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(taxi3)}
            />
          </Stack>
        </Box>

        <Typography
          className="custom-link"
          mt={3}
          variant="body2"
          align="center"
        >
          <a
            href="https://www.abtaxiservice77.fr/"
            target="_blank"
            className="custom-link"
          >
            Visitez le site Web de AB Taxi
          </a>
        </Typography>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Technologies utilisées
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={nextLogo}
                alt="Kotlin"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }} // Utilisation des styles en ligne pour définir les dimensions
              />
              <Typography variant="body1" align="center">
                Next.JS
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <Dialog
        open={!!fullScreenImage}
        onClose={handleCloseFullScreenImage}
        fullWidth
        maxWidth="sm"
      >
        <img
          src={fullScreenImage}
          alt="Full Screen"
          style={{ width: "100%", height: "auto" }}
        />
      </Dialog>
    </Box>
  );
};

export default ABTaxiProject;
