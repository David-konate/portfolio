import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  CardMedia,
  Stack,
  Card,
  Box,
  Divider,
} from "@mui/material";
import SmatDesign1 from "../../assets/cda1.png";
import SmatDesign2 from "../../assets/cda2.png";
import SmatDesign3 from "../../assets/cda3.png";
import SmatDesign4 from "../../assets/cda4.png";
import SmatDesign5 from "../../assets/cda5.png";
import SmatDesign6 from "../../assets/cda6.png";
import SmatDev1 from "../../assets/smat1.png";
import SmatDev2 from "../../assets/smat2.png";
import SmatDev3 from "../../assets/smat3.png";

const Smat = ({ open, onClose }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [dialogSize, setDialogSize] = useState("sm");

  const handleImageClick = (image, size) => {
    setFullScreenImage(image);
    setDialogSize(size);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball">
      <DialogContent className="dialog-ball slide-in">
        <Typography className="title-project slide-in" variant="h3">
          Smat Steps : Application de Quiz
        </Typography>

        <Card className="card-smat" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            Smart Steps est une application de quiz conçue pour susciter
            l'esprit de compétition et la collaboration. Elle propose deux modes
            distincts : <br />
            - Mode Communauté: Affrontez d'autres utilisateurs et comparez vos
            scores sur un classement général. <br />- Mode Duel: Défiez un
            adversaire spécifique dans un duel palpitant pour déterminer le
            vainqueur. <br />
            Entièrement sécurisée et nécessitant une confirmation par email,
            Smart Steps est développée à l'aide des technologies React et
            Laravel. <br />
            La création de l'application a impliqué le codage de tous les
            éléments, des migrations aux vues, en passant par les contrôleurs et
            la mise en place de divers fournisseurs.
          </Typography>
        </Card>

        {/* Conception Part */}
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
              alt="Conception Image 4"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign4, "md")}
            />
            <CardMedia
              component="img"
              image={SmatDesign5}
              alt="Conception Image 5"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign5, "md")}
            />
            <CardMedia
              component="img"
              image={SmatDesign6}
              alt="Conception Image 6"
              className="image-projet"
              onClick={() => handleImageClick(SmatDesign6, "md")}
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

        {/* Development Part */}
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
            <li>Déploiement de l'application sur des serveurs O2Switch.</li>
            <li>
              Configuration de la gestion des versions et des mises à jour de
              l'application.
            </li>
            <li>
              Surveillance et analyse des performances de l'application une fois
              qu'elle est en ligne.
            </li>
            <li>
              Implémentation de la logique d'authentification et d'autorisation.
            </li>
            <li>Développement des fonctionnalités CRUD.</li>
            <li>Migration et peuplement de la base de données.</li>
            <li>Mise en place d'une logique de gestion des questions.</li>
            <li>Calcul des points et gestion des scores.</li>
            <li>Création des vues et des contrôleurs.</li>
            <li>Configuration des différents fournisseurs.</li>
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
          </Stack>
        </Box>
        <Typography
          className="custom-link"
          mt={3}
          variant="body2"
          align="center"
        >
          <a
            href="https://www.smat-steps.david-konate.fr/"
            target="_blank"
            className="custom-link"
          >
            Visitez le site Web de Smat-Steps
          </a>
        </Typography>
      </DialogContent>

      {/* Dialog for full screen image */}
      <Dialog
        open={!!fullScreenImage}
        onClose={handleCloseFullScreenImage}
        fullWidth
        maxWidth={dialogSize}
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

export default Smat;
