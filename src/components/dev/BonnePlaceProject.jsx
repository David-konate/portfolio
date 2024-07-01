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
import BonnePlace1 from "../../assets/labonneplace1.png";
import BonnePlace2 from "../../assets/labonneplace2.png";
import BonnePlace3 from "../../assets/labonneplace3.png";
import ReactLogo from "../../assets/react.jpg";
import ReactSymp from "../../assets/symfony.jpg";

const BonnePlaceProject = ({ open, onClose }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball retro-theme">
      <DialogContent className="dialog-ball slide-in">
        <Typography className="title-project slide-in" variant="h3">
          LaBonnePlace : Plateforme de petites annonces en ligne
        </Typography>

        <Card className="card-bonne-place" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            BonnePlace est une plateforme de petites annonces en ligne,
            similaire à Le Bon Coin. Ce projet a été réalisé dans le cadre de ma
            formation, en collaboration avec deux autres apprenants. J'ai
            principalement travaillé sur les aspects suivants :
          </Typography>
        </Card>
        <Box mt={5}>
          <ul className="dialog-list-2 slide-in">
            <li className="task-item-2 typing-text-2">
              Implémentation de la logique d'authentification et d'autorisation
              des utilisateurs
            </li>
            <li className="task-item-2 typing-text-2">
              Création de fonctionnalités CRUD pour la gestion des annonces et
              des utilisateurs
            </li>
            <li className="task-item-2 typing-text-2">
              Mise en place de la navigation entre les différentes pages de
              l'application
            </li>
            <li className="task-item-2 typing-text-2">
              Travail sur la logique de connexion et le profil utilisateur
            </li>
            <li className="task-item-2 typing-text-2">
              Migration et seeding de la base de données
            </li>
          </ul>
        </Box>
        <Box mt={5} p={1} style={{ overflowY: "hidden" }}>
          <Stack
            mt={5}
            direction="row"
            spacing={2}
            className="box-image-projet"
          >
            <CardMedia
              component="img"
              image={BonnePlace3}
              alt="Page de détail d'une annonce sur BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(BonnePlace3)}
            />
            <CardMedia
              component="img"
              image={BonnePlace1}
              alt="Page d'accueil de BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(BonnePlace1)}
            />
            <CardMedia
              component="img"
              image={BonnePlace2}
              alt="Page de recherche d'annonces sur BonnePlace"
              className="image-projet"
              onClick={() => handleImageClick(BonnePlace2)}
            />
          </Stack>
        </Box>

        {/* Section des technologies utilisées */}
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
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={ReactSymp}
                alt="Kotlin"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }} // Utilisation des styles en ligne pour définir les dimensions
              />
              <Typography variant="body1" align="center">
                Symphonie
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      {/* Dialog pour l'image en plein écran */}
      <Dialog
        open={!!fullScreenImage}
        onClose={handleCloseFullScreenImage}
        fullWidth
        maxWidth="xl"
      >
        <DialogContent>
          <img
            src={fullScreenImage}
            alt="Plein écran"
            style={{ width: "400%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BonnePlaceProject;
