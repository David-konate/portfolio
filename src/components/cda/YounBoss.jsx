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

const YoungBoss = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [dialogSize, setDialogSize] = useState("md");

  const handleImageClick = (image, size) => {
    setFullScreenImage(image);
    setDialogSize(size);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage(null);
  };

  return (
    <Box p={0} className="dialog-ball">
      <Typography className="title-project slide-in" variant="h3">
        Programme Young Boss - UNDRTD Sport
      </Typography>

      <DialogContent className="dialog-ball slide-in">
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
        <Box mt={5}>
          <Typography sx={{ color: "var(--theme-link-color)" }} variant="h4">
            Phase de Développement
          </Typography>
          {/* Ajoutez vos tâches de développement ici */}
        </Box>
      </DialogContent>

      {/* Dialog for full screen image */}
      <Dialog
        open={!!fullScreenImage}
        onClose={handleCloseFullScreenImage}
        fullWidth
        maxWidth={dialogSize}
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

export default YoungBoss;
