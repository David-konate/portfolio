import React, { useState } from "react";
import {
  Typography,
  CardMedia,
  Stack,
  Card,
  Box,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";

import SmatDesign1 from "../../assets/YB1.png";
import SmatDesign2 from "../../assets/YB2.png";
import SmatDesign3 from "../../assets/YB3.png";
import SmatDesign4 from "../../assets/YB4.png";
import SmatDev1 from "../../assets/smat1.png";
import SmatDev2 from "../../assets/smat2.png";
import SmatDev3 from "../../assets/smat3.png";

const YoungBoss = () => {
  const [flilScreenImage, setFlilScreenImage] = useState(null);
  const [dialogSize, setDialogSize] = useState("md");

  const handleImageClick = (image, size) => {
    setFlilScreenImage(image);
    setDialogSize(size);
  };

  const handleCloseFlilScreenImage = () => {
    setFlilScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball">
      <DialogContent className="dialog-ball slide-in">
        <Typography className="title-project slide-in" variant="h3">
          Programme Young Boss - UNDRTD Sport
        </Typography>

        <Card className="card-smat" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            Le programme Young Boss vise à promouvoir l'insertion
            professionnelle des jeunes par le biais du sport. Il rassemble des
            jeunes et des entreprises lors d'activités et de formations.
          </Typography>
        </Card>

        {/* Phase de Conception */}
        <Box mt={5}>
          <Typography sx={{ color: "var(--theme-link-color)" }} variant="h4">
            Phase de Conception
          </Typography>
          <ul className="dialog-list slide-in">
            <li>
              Création d'un cahier des charges avec pour thème comment proposer
              une application amusante et éducative
            </li>
            <li>Réalisation du dossier technique</li>
            <li>Réalisation du dossier fonctionnel</li>
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
              image={SmatDesign1}
              alt="Conception Image 1"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign1, "md")}
            />
            <CardMedia
              component="img"
              image={SmatDesign2}
              alt="Conception Image 2"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign2, "md")}
            />
            <CardMedia
              component="img"
              image={SmatDesign3}
              alt="Conception Image 3"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign3, "md")}
            />
            <CardMedia
              component="img"
              image={SmatDesign4}
              alt="Conception Image 3"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign4, "md")}
            />
          </Stack>
        </Box>
        <Divider
          sx={{
            marginY: 5,
            marginLeft: 10,
            marginRight: 40,
            height: 1.2,
            backgroundColor: "var(--theme-secondary-color)",
          }}
        />

        {/* Phase de Développement */}
        {/* Phase de Développement */}
        <Box mt={5}>
          <Typography sx={{ color: "var(--theme-link-color)" }} variant="h4">
            Phase de Développement
          </Typography>
          <ul className="dialog-list slide-in">
            <li>Conception et développement de l'interface utilisateur.</li>
            <li>Développement des fonctionnalités de backend.</li>
            <li>Gestion de bases de données et stockage des données.</li>
            <li>
              Intégration de services tiers tels que les systèmes
              d'authentification.
            </li>
            <li>
              Développement de fonctionnalités spécifiques à la plateforme
              (gestion évènements, algorythme de matching...)
            </li>
            <li>
              Tests unitaires et tests d'intégration pour garantir la qualité du
              code.
            </li>
            <li>Optimisation des performances de l'application.</li>
            <li>
              Mise en place de mécanismes de sécurité pour protéger les données
              et les utilisateurs.
            </li>
            <li>Gestion des erreurs et des exceptions.</li>
            <li>Documentation du code et des fonctionnalités.</li>
            <li>
              Déploiement de l'application sur des serveurs ou des plateformes
              cloud.
            </li>
            <li>
              Configuration de la gestion des versions et des mises à jour de
              l'application.
            </li>
            <li>
              Surveillance et analyse des performances de l'application une fois
              qu'elle est en ligne.
            </li>
            {/* Ajoutez d'autres tâches spécifiques au projet si nécessaire */}
          </ul>
        </Box>

        <Box mt={5} p={1} style={{ overflowY: "hidden" }}>
          {/* <Stack
            mt={5}
            direction="row"
            spacing={2}
            className="box-image-projet"
          >
            <CardMedia
              component="img"
              image={SmatDev1}
              alt="Développement Image 1"
              className="image-projet"
              onClick={() => handleImageClick(SmatDev1, "xl")}
            />
            <CardMedia
              component="img"
              image={SmatDev2}
              alt="Développement Image 2"
              className="image-projet"
              onClick={() => handleImageClick(SmatDev2, "xl")}
            />
            <CardMedia
              component="img"
              image={SmatDev3}
              alt="Développement Image 3"
              className="image-projet"
              onClick={() => handleImageClick(SmatDev3, "xl")}
            />
          </Stack> */}
        </Box>
        <Typography
          className="custom-link"
          mt={3}
          variant="body2"
          align="center"
        >
          Développement du site YounBoss toujours en cours
        </Typography>
      </DialogContent>

      {/* Dialog for flil screen image */}
      <Dialog
        open={!!flilScreenImage}
        onClose={handleCloseFlilScreenImage}
        flilWidth
        maxWidth={dialogSize}
      >
        <img
          src={flilScreenImage}
          alt="Flil Screen"
          style={{ width: "100%", height: "auto" }}
        />
      </Dialog>
    </Box>
  );
};

export default YoungBoss;
