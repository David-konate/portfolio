import React, { useState } from "react";
import {
  DialogContent,
  Typography,
  CardMedia,
  Stack,
  Card,
  Box,
  Dialog,
} from "@mui/material";
import BallnConnect1 from "../../assets/ballnconnect1.jpg";
import BallnConnect2 from "../../assets/ballnconnect2.jpg";
import BallnConnect3 from "../../assets/ballnconnect3.jpg";

const BallnConnectProject = () => {
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
          BallnConnect : Application mobile pour les passionnés de basketball
        </Typography>

        <Card className="card-bonne-place" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            BallnConnect est une application mobile qui connecte les passionnés
            de basketball aux terrains, événements et joueurs à proximité. J'ai
            contribué en tant que développeur front-end à ce projet, en mettant
            en place les fonctionnalités suivantes :
          </Typography>
        </Card>
        <Box mt={5}>
          <ul className="dialog-list slide-in">
            <li>Authentification et autorisation des utilisateurs</li>
            <li>
              Intégration avec l'API Google Street View pour la visualisation
              des terrains
            </li>
            <li>
              Opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour les
              terrains de jeux et les événements
            </li>
            <li>
              Mise en place des pages de visualisation des événements et de
              création d'événements, spécifiques à chaque lieu, permettant aux
              utilisateurs de s'inscrire à des événements ou des terrains.
            </li>
            <li>
              Mise en place de la navigation entre les différentes pages de
              l'application.
            </li>
          </ul>
        </Box>

        <Stack mt={5} direction="row" spacing={2} className="box-image-projet2">
          <CardMedia
            component="img"
            image={BallnConnect1}
            alt="Page de visualisation des événements de BallnConnect"
            className="image-projet"
            onClick={() => handleImageClick(BallnConnect1)}
          />
          <CardMedia
            component="img"
            image={BallnConnect2}
            alt="Terrain de basket avec informations"
            className="image-projet"
            onClick={() => handleImageClick(BallnConnect2)}
          />
          <CardMedia
            component="img"
            image={BallnConnect3}
            alt="Terrain de basket avec informations"
            className="image-projet"
            onClick={() => handleImageClick(BallnConnect3)}
          />
        </Stack>

        <Typography
          className="custom-link"
          mt={3}
          variant="body2"
          align="center"
        >
          <a
            href="https://www.ballnconnect.com/"
            target="_blank"
            className="custom-link"
          >
            Visitez le site Web de BallnConnect
          </a>
        </Typography>
      </DialogContent>

      {/* Dialog for full screen image */}
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

export default BallnConnectProject;
