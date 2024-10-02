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
  Divider,
} from "@mui/material";
import AgendaDesign1 from "../../assets/agenda.png";
import AgendaDesign2 from "../../assets/agenda2.png";
import AgendaDesign3 from "../../assets/agenda3.png";
import AgendaDesign4 from "../../assets/agenda4.png";
import AgendaDesign5 from "../../assets/agenda5.png";
import AgendaDesign6 from "../../assets/agenda6.png";
import AgendaDesign7 from "../../assets/agenda1.png";
import AgendaDesign8 from "../../assets/agenda8.png";
// import SmatDev1 from "../../assets/smat1.png";
// import SmatDev2 from "../../assets/smat2.png";
// import SmatDev3 from "../../assets/smat3.png";
import VueLogo from "../../assets/vue.jpg";
import LaravelLogo from "../../assets/laravel.png";
import TailWindLogo from "../../assets/tailwind.jpg";
import MySQLLogo from "../../assets/sql.avif";
import EloqueLogo from "../../assets/eloquent.jpg";

const Smat = ({ open, onClose }) => {
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
        TeamCalenda : Gestion Collaborative des Agendas
      </Typography>

      <DialogContent className="dialog-ball slide-in">
        <Card className="card-smat" sx={{ marginTop: 4 }}>
          <Typography p={2} variant="body1">
            TeamCalenda est une application innovante conçue pour faciliter le
            partage intuitif des sessions d'agenda entre différents
            utilisateurs. <br />
            Elle permet à chaque utilisateur d'inviter n'importe qui possédant
            une adresse web grâce à un système de vérification intelligent.{" "}
            <br />
            Lorsque l'invité reçoit une invitation, un message est envoyé, soit
            sur la plateforme si l'invité possède déjà un compte, <br />
            soit par e-mail avec les étapes à suivre pour créer un compte.{" "}
            <br />
            Dès la connexion, l'application met en avant les différentes
            sessions d'agenda ainsi que les messages et les événements à venir
            ou en cours. <br />
            Chaque session partage également un système de messagerie intégré,
            permettant aux utilisateurs d'échanger des informations <br />
            TeamCalenda allie simplicité et efficacité, offrant une solution
            complète pour la gestion des agendas collaboratifs, <br />
            où chaque utilisateur peut facilement s'organiser et communiquer
            avec ses pairs.
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
              une application apermettant de partager de manière intuitive des
              agendas
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
              image={AgendaDesign1}
              alt="Conception Image 1"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign1)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign2}
              alt="Conception Image 2"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign2)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign2}
              alt="Conception Image 2"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign2)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign3}
              alt="Conception Image 3"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign3)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign4}
              alt="Conception Image 4"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign4)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign5}
              alt="Conception Image 5"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign5)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign6}
              alt="Conception Image 6"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign6)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign7}
              alt="Conception Image 4"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign7)}
            />
            <CardMedia
              component="img"
              image={AgendaDesign8}
              alt="Conception Image 4"
              className="image-projet"
              onClick={() => handleImageClick(AgendaDesign8)}
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
            <li>
              Mise en place d'une logique de gestion des agendas et des
              événements.
            </li>
            <li>
              Gestion des invitations en fonction de si l'invité a déjà un
              compte ou non dans la BDD de l'application.
            </li>
            <li>
              Paramétrage d'une messagerie interne à chaque session d'agenda.
            </li>
            <li>Création des vues et des contrôleurs.</li>
          </ul>
        </Box>
        {/* <Box mt={5} p={1} style={{ overflowY: "hidden" }}>
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
              onClick={() => handleImageClick(SmatDev1)}
            />
            <CardMedia
              component="img"
              image={SmatDev2}
              alt="Développement Image 2"
              className="image-projet"
              onClick={() => handleImageClick(SmatDev2)}
            />
            <CardMedia
              component="img"
              image={SmatDev3}
              alt="Développement Image 3"
              className="image-projet"
              onClick={() => handleImageClick(SmatDev3)}
            />
          </Stack>
        </Box> */}
        <Typography
          className="custom-link"
          mt={3}
          variant="body2"
          align="center"
        >
          <a
            href="https://www.agenda.david-konate.fr/"
            target="_blank"
            className="custom-link"
          >
            Visitez le site Web de TeamAgenda
          </a>
        </Typography>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Technologies utilisées
          </Typography>
          <Grid container spacing={2}>
            {/* Kotlin */}
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={VueLogo}
                alt="Vue"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }}
              />
              <Typography variant="body1" align="center">
                Vue3
              </Typography>
            </Grid>
            {/* Symfony */}
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={LaravelLogo}
                alt="Laravel"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }}
              />
              <Typography variant="body1" align="center">
                Laravel
              </Typography>
            </Grid>
            {/* Material UI */}
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={TailWindLogo}
                alt="Tailwind CSS"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }}
              />
              <Typography variant="body1" align="center">
                Tailwind CSS
              </Typography>
            </Grid>
            {/* MySQL */}
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={MySQLLogo}
                alt="MySQL"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }}
              />
              <Typography variant="body1" align="center">
                MySQL
              </Typography>
            </Grid>
            {/* Eloque */}
            <Grid item xs={6} sm={6} md={3}>
              <CardMedia
                component="img"
                image={EloqueLogo}
                alt="Eloque"
                className="tech-logo"
                style={{ width: 118.75, height: 80.5 }}
              />
              <Typography variant="body1" align="center">
                Eloquent
              </Typography>
            </Grid>
          </Grid>
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

export default Smat;
