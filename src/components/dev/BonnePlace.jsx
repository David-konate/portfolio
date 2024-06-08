import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  CardMedia,
  Stack,
  Card,
  Box,
} from "@mui/material";
import BonnePlace1 from "../../assets/labonneplace1.png";
import BonnePlace2 from "../../assets/labonneplace2.png";
import BonnePlace3 from "../../assets/labonneplace3.png";

const BonnePlaceProject = ({ open, onClose }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball">
      <DialogContent className="dialog-ball">
        <Typography className="title-project" variant="h3">
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
          <ul className="dialog-list">
            <li>
              Implémentation de la logique d'authentification et d'autorisation
              des utilisateurs
            </li>
            <li>
              Création de fonctionnalités CRUD pour la gestion des annonces et
              des utilisateurs
            </li>
            <li>
              Mise en place de la navigation entre les différentes pages de
              l'application
            </li>
            <li>
              Travail sur la logique de connexion et le profil utilisateur
            </li>
            <li>Migration et seeding de la base de données</li>
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
      </DialogContent>

      {/* Dialog for full screen image */}
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

export default BonnePlaceProject;
